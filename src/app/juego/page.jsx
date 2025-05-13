"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"

export default function GamePage() {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")

      if (!token) {
        router.push("/login")
        return
      }

      try {
        // Decodificar el token (en una app real usarías JWT u otro método seguro)
        const decoded = JSON.parse(atob(token))
        setUserData(decoded)
        setLoading(false)
      } catch (error) {
        console.error("Token inválido", error)
        localStorage.removeItem("authToken")
        router.push("/login")
      }
    }

    checkAuth()

    // Monitorear cambios en localStorage para seguridad adicional
    const handleStorageChange = (e) => {
      if (e.key === "authToken" && !e.newValue) {
        router.push("/login")
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/login")
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.gameStats}>
          <div className={styles.timer}>
            <span className={styles.timerValue}>30</span>
            <span className={styles.timerLabel}>seg</span>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.lives}>
            <span className={styles.heart}>❤️</span>
            <span className={styles.heart}>❤️</span>
            <span className={styles.heart}>❤️</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.gameContent}>
          {/* Contenedor de la pregunta */}
          <div className={styles.questionContainer}>
            <h2 className={styles.questionText}>¿Cuál es la capital de Francia?</h2>
          </div>

          {/* Opciones de respuesta */}
          <div className={styles.optionsGrid}>
            <button className={styles.optionButton}>Madrid</button>
            <button className={styles.optionButton}>Berlín</button>
            <button className={styles.optionButton}>París</button>
            <button className={styles.optionButton}>Roma</button>
          </div>
        </div>

        {/* Pantalla de Game Over (oculta por defecto) */}
        <div className={styles.gameOverScreen} style={{ display: "none" }}>
          <h2 className={styles.gameOverText}>Game Over</h2>
          <button className={styles.retryButton}>Reintentar</button>
          <button className={styles.homeButton}>Volver al inicio</button>
        </div>
      </main>
    </div>
  )
}
