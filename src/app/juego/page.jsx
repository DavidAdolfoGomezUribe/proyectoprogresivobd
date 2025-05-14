"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import questions from "@/app/data/questions.json";

export default function GamePage() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState(null);
  const [progress, setProgress] = useState([]);
  const [roundScore, setRoundScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [questionsRound, setQuestionsRound] = useState(questions.slice(0, 10));
  const [win, setWin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) return router.push("/login");

    try {
      const decoded = JSON.parse(atob(token));
      setUserData(decoded);      
      fetchUserScore(decoded.email);
      setLoading(false);
    } catch {
      localStorage.removeItem("authToken");
      router.push("/login");
    }

    const handleStorageChange = (e) => {
      if (e.key === "authToken" && !e.newValue) {
        router.push("/login");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [router]);

  const fetchUserScore = async (email) => {
    try {
      const res = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/Users");
      const data = await res.json();
      const user = data.find((u) => u.email === email);
      if (user?.score) setTotalScore(user.score);
    } catch (error) {
      console.error("Error al obtener score:", error);
    }
  };

  // Temporizador
  useEffect(() => {
    if (timeLeft <= 0 || lives <= 0) {
      setGameOver(true);
      setWin(false);
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, lives]);

  // Resultado de ronda
  useEffect(() => {
    if (gameOver && userData) {
      const score = timeLeft * lives * 10;
      if (progress.length === 10) setWin(true);
      setRoundScore(score);
      updateUserScore(score);
    }
  }, [gameOver, userData]);

  const updateUserScore = async (score) => {
    try {
      if (user) {
        const updatedScore = score;

        await fetch(`https://681cec17f74de1d219ae45cd.mockapi.io/Users/${user.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score: updatedScore, user: decoded.email }),
        });
        setTotalScore(updatedScore);
      }
    } catch (error) {
      console.error("Error actualizando el score:", error);
    }
  };

  const handleAnswer = (selected) => {
    const currentQuestion = questionsRound[currentIndex];
    const isCorrect = selected === currentQuestion.answer;

    setProgress((prev) => [...prev, isCorrect ? "correct" : "incorrect"]);
    if (isCorrect) {
      setTimeLeft((prev) => Math.min(prev + 10, 60));
      setFeedbackColor("green");
    } else {
      setLives((prev) => prev - 1);
      setFeedbackColor("red");
    }

    setTimeout(() => {
      setFeedbackColor(null);
      if (currentIndex + 1 < 10) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setLives(3);
    setTimeLeft(60);
    setGameOver(false);
    setProgress([]);
    setQuestionsRound(shuffleArray(questions).slice(0, 10));
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.progressBar}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.progressSegment} ${styles[progress[index]] || ""}`}
          ></div>
        ))}
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.gameStats}>
            <div className={styles.timer}>
              <span className={styles.timerValue}>{timeLeft}</span>
              <span className={styles.timerLabel}>seg</span>
            </div>
            <div className={styles.score}>SCORE: {totalScore}</div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.lives}>❤️ x {lives}</div>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </div>
        </header>

        <main className={styles.main}>
          {!gameOver ? (
            <div className={styles.gameContent}>
              <div
                className={styles.questionContainer}
                style={{ backgroundColor: feedbackColor || "transparent" }}
              >
                <h2 className={styles.questionText}>{questionsRound[currentIndex].question}</h2>
              </div>
              <div className={styles.optionsGrid}>
                {questionsRound[currentIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className={styles.optionButton}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.gameOverScreen}>
              <h2 className={styles.gameOverText}>
                {win ? "¡Ganaste!" : "¡Perdiste!"}
              </h2>
              <p className={styles.scoreText}>Puntaje de la ronda: {roundScore}</p>
              <button onClick={handleRetry} className={styles.retryButton}>
                Continuar
              </button>
              <button onClick={() => router.push("/")} className={styles.homeButton}>
                Volver al inicio
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
