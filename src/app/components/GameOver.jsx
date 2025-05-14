"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../juego/page.module.css";
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
  const router = useRouter();

  // Validar sesión
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) return router.push("/login");

    try {
      const decoded = JSON.parse(atob(token));
      setUserData(decoded);
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

  // Temporizador
  useEffect(() => {
    if (timeLeft <= 0 || lives <= 0) {
      setGameOver(true);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, lives]);

  // Subir puntuación al MockAPI
  useEffect(() => {
    if (gameOver && progress.length === 10 && userData) {
      const score = timeLeft * lives * 10;
      uploadScore(score);
    }
  }, [gameOver, progress, userData]);

  const uploadScore = async (score) => {
    try {
      const payload = {
        userId: userData.userId,
        email: userData.email,
        score,
        date: new Date().toISOString(),
      };

      await fetch("https://<TU_MOCKAPI_URL>/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Puntuación subida:", payload);
    } catch (error) {
      console.error("Error al subir puntuación:", error);
    }
  };

  const handleAnswer = (selected) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selected === currentQuestion.answer;

    // Actualiza progreso visual
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

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setLives(3);
    setTimeLeft(60);
    setGameOver(false);
    setProgress([]);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

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
                <h2 className={styles.questionText}>{currentQuestion.question}</h2>
              </div>
              <div className={styles.optionsGrid}>
                {currentQuestion.options.map((option, index) => (
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
              <h2 className={styles.gameOverText}>Game Over</h2>
              <button onClick={handleRetry} className={styles.retryButton}>
                Reintentar
              </button>
              <button onClick={() => router.push("../")} className={styles.homeButton}>
                Volver al inicio
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
