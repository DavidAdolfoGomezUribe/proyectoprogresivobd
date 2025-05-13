"use client"

import { useEffect, useState } from "react"
import Login from "./components/login"
import Register from "./components/register"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Verificar si el usuario ya está autenticado
    const token = localStorage.getItem("authToken")
    if (token) {
      router.push("/juego")
    }
  }, [router])

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{showRegister ? "Crear Cuenta" : "Iniciar Sesión"}</h1>
        {showRegister ? (
          <Register onRegisterSuccess={() => setShowRegister(false)} onBackToLogin={() => setShowRegister(false)} />
        ) : (
          <Login onRegisterClick={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  )
}
