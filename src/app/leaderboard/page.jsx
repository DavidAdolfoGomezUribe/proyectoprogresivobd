"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export default function Page() {
  const [leaderBoard, setLeaderBoard] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/leaderBoard")
        const data = await response.json()
        setLeaderBoard(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Función que devuelve los elementos ordenados por score descendente
  function getHighestScores() {
    return [...leaderBoard].sort((a, b) => b.score - a.score)
  }

  const sortedElements = getHighestScores()

  return (
    <div className={styles["arcade-container"]}>
      <header className={styles["arcade-header"]}>
        <div className={styles["neon-text"]}>
          <h1 className={styles.titulo}>Play_</h1>
        </div>
        <div className={styles["blink-text"]}>
          <h1 className={styles.subtitulo}>LEADERBOARD</h1>
        </div>
      </header>

      <main className={styles["arcade-main"]}>
        <div className={styles["arcade-screen"]}>
          <div className={styles["screen-header"]}>
            <div className={styles["screen-title"]}>HIGH SCORES</div>
            <div className={styles["screen-scanline"]}></div>
          </div>

          {isLoading ? (
            <div className={styles["loading-text"]}>LOADING...</div>
          ) : (
            <div className={styles["leaderboard-table"]}>
              <div className={styles["table-header"]}>
                <div className={styles["rank-col"]}>RANK</div>
                <div className={styles["user-col"]}>PLAYER</div>
                <div className={styles["score-col"]}>SCORE</div>
              </div>

              {sortedElements.map((entry, index) => (
                <div
                  className={`${styles["table-row"]} ${index < 3 ? styles["top-score"] : ""}`}
                  key={entry.id || index}
                >
                  <div className={styles["rank-col"]}>{index + 1}</div>
                  <div className={styles["user-col"]}>{entry.user}</div>
                  <div className={styles["score-col"]}>{entry.score}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Link href="./" className={styles["arcade-button"]}>
          <span className={styles["button-text"]}>VOLVER</span>
        </Link>
      </main>
    </div>
  )
}
