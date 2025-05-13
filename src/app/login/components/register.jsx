"use client"
import { useState } from "react"
import styles from "./register.module.css"

export default function Register({ onRegisterSuccess, onBackToLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      setLoading(false)
      return
    }

    try {
      // Verificar si el email ya existe
      const checkResponse = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/Users")

      if (!checkResponse.ok) {
        throw new Error("Error al conectar con el servidor")
      }

      const existingUsers = await checkResponse.json()
      const emailExists = existingUsers.some((user) => user.email === email)

      if (emailExists) {
        setError("Este email ya está registrado")
        setLoading(false)
        return
      }

      // Crear nuevo usuario
      const response = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al registrar usuario")
      }

      setSuccess("¡Cuenta creada exitosamente! Ya puedes iniciar sesión.")

      // Volver a la pantalla de login después de un breve delay
      setTimeout(() => {
        onRegisterSuccess()
      }, 2000)
    } catch (err) {
      setError("Error al crear la cuenta. Por favor intenta de nuevo.")
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
            placeholder="Crea una contraseña"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
            placeholder="Confirma tu contraseña"
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Creando cuenta..." : "Crear Cuenta"}
        </button>
      </form>

      <div className={styles.loginLink}>
        ¿Ya tienes una cuenta?{" "}
        <button onClick={onBackToLogin} className={styles.linkButton}>
          Inicia sesión aquí
        </button>
      </div>
    </div>
  )
}
