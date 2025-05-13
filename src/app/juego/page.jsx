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
        <h1>Página de Juego</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Cerrar Sesión
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.welcomeCard}>
          <h2>¡Bienvenido!</h2>
          <p>
            Has iniciado sesión correctamente con el email: <strong>{userData?.email}</strong>
          </p>
          <p>Esta es la página protegida del juego. Solo usuarios autenticados pueden verla.</p>
        </div>

        <div className={styles.gameContent}>
          <h3>Contenido del Juego</h3>
          <p>Aquí iría el contenido principal de tu juego.</p>
        </div>
      </main>
    </div>
  )
}
