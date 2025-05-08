// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false

  const token = localStorage.getItem("authToken")
  if (!token) return false

  try {
    // Decodificar el token (en una app real usarías JWT u otro método seguro)
    JSON.parse(atob(token))
    return true
  } catch (error) {
    console.error("Token inválido", error)
    localStorage.removeItem("authToken")
    return false
  }
}

// Función para obtener los datos del usuario desde el token
export const getUserData = () => {
  if (typeof window === "undefined") return null

  const token = localStorage.getItem("authToken")
  if (!token) return null

  try {
    return JSON.parse(atob(token))
  } catch (error) {
    console.error("Error al decodificar token", error)
    return null
  }
}

// Función para cerrar sesión
export const logout = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem("authToken")
}
