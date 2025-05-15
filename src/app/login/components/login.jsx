"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./login.module.css"
import Link from "next/link"

export default function Login({ onRegisterClick }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      // Obtener usuarios de la API
      const response = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/Users")

      if (!response.ok) {
        throw new Error("Error al conectar con el servidor")
      }

      const users = await response.json()

      // Buscar usuario con email y password coincidentes
      const user = users.find((u) => u.email === email && u.password === password)

      if (user) {
        // Login exitoso
        setSuccess("¡Inicio de sesión exitoso! Redireccionando...")

        // Crear un token simple (en una app real usarías JWT u otro método seguro)
        const token = btoa(JSON.stringify({ userId: user.id, email: user.email }))
        localStorage.setItem("authToken", token)

        // Redireccionar después de un breve delay para mostrar el mensaje de éxito
        setTimeout(() => {
          router.push("/juego")
        }, 1500)
      } else {
        setError("Email o contraseña incorrectos")
      }
    } catch (err) {
      setError("Error al iniciar sesión. Por favor intenta de nuevo.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {success && <div className={styles.successMessage}>{success}</div>}
      {error && <div className={styles.errorMessage}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            placeholder="tu@email.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
            placeholder="Tu contraseña"
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>
      </form>

      <div className={styles.registerLink}>
        ¿No tienes una cuenta?{" "}
        <button onClick={onRegisterClick} className={styles.linkButton}>
          Regístrate aquí
        </button>
        </div>
        <div className="w-[100%] flex justify-center items-center self-center text-1xl pt-2">

          <Link  href={"./"} className="hover:bg-blue-600 p-2 w-full text-center rounded-2xl hover:text-white" > Salir</Link>
        </div>
    </div>
  )
}
