
# 🎮 Proyecto Arcade 

Este proyecto es una aplicación web de preguntas y respuestas tipo trivia con estética de videojuego arcade. Desarrollado en equipo con fines educativos, combina diseño retro, interactividad, puntuaciones en tiempo real y una tabla de clasificación (*Leaderboard*).

---

## 📌 Descripción General

El juego consiste en responder una serie de preguntas de opción múltiple dentro de un límite de tiempo. Cada respuesta correcta suma puntos, mientras que las incorrectas restan vidas. Al finalizar, el usuario puede ver su resultado, acceder al leaderboard y jugar nuevamente para mejorar su puntuación.

Además, el juego guarda las puntuaciones acumuladas de cada usuario en una base de datos externa (MockAPI), lo que permite llevar un control del rendimiento total de cada jugador.

---
## 🎥 Video
https://www.youtube.com/watch?v=oM8S2QXanKc

---

## 🧩 Funcionalidades Principales

- 🎲 Juego de preguntas y respuestas tipo trivia.
- ❤️ Sistema de vidas (pierdes si se acaban).
- ⏱️ Temporizador por pregunta con bonificación por rapidez.
- 💬 Mensajes personalizados según el resultado ("¡Ganaste!" / "Game Over").
- 🔁 Posibilidad de jugar otra ronda con nuevas preguntas.
- 📊 Registro del puntaje acumulado en MockAPI por usuario.
- 🏆 Leaderboard global en tiempo real con top de puntuaciones.
- 🧠 Preguntas cargadas desde archivo JSON para control total.
- 🔄 Transición automática entre preguntas con animaciones.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** – Framework React para renderizado híbrido (SSR/CSR).
- **React** – Librería para la interfaz de usuario.
- **CSS Modules** – Estilizado modular y reutilizable.
- **MockAPI** – Servicio externo de base de datos simulada para usuarios y leaderboard.
- **JavaScript moderno (ES6+)**
- **HTML semántico y accesible**

---

## 🖥️ Diseño y Usabilidad

- 🎮 Inspiración retro/arcade con efectos de texto neón, escaneo de pantalla, y tipografía pixelada.
- 📱 **Diseño responsive** compatible con móviles, tablets y desktop.
- 🔒 Buenas prácticas de estructura, código limpio y componentes reutilizables.

---

## 🚀 Instalación y Uso

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   cd nombre-del-proyecto
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre en el navegador**

   Visita `http://localhost:3000` para comenzar a jugar.

---

## 📂 Estructura del Proyecto

```
📁 /app
 ┣ 📁 /leaderboard      → Página con el top global de puntuaciones
 ┣ 📁 /game             → Lógica y pantalla principal del juego
 ┗ 📜 page.tsx          → Página principal con opciones

📁 /components
 ┣ 📜 QuestionCard.tsx  → Componente que muestra cada pregunta
 ┣ 📜 GameOverModal.tsx → Modal de derrota o victoria
 ┗ 📜 ScoreBar.tsx      → Vidas, puntaje y tiempo

📁 /data
 ┗ 📜 questions.json     → Preguntas precargadas del juego

📁 /styles
 ┗ 📜 styles.module.css  → Estilos retro-arcade

📁 /utils
 ┗ 📜 api.js             → Funciones para interactuar con MockAPI
```

---

## 📡 API y Base de Datos

Usamos [MockAPI](https://mockapi.io/) para:

- Guardar los puntajes acumulados por usuario (`/users`)
- Registrar cada partida individual con su score (`/leaderBoard`)

Esto permite tener:

- Score total actualizado por usuario
- Ranking general en la sección *Leaderboard*

---

## 👥 Créditos del Equipo

Desarrollado por:

- 👨‍💻 David Adolfo
- 👩‍💻 Breyner Pinto	
- 👨‍💻 Mateo Paternina
- 👩‍💻 Daniel Cubides

Con colaboración, organización por ramas, uso de buenas prácticas y planificación SCRUM con historias de usuario y priorización MoSCoW.

---

## 🧠 Posibles Mejoras Futuras

- 🌍 Internacionalización (i18n) con varios idiomas.
- 🔊 Efectos sonoros y música de fondo.
- 🧩 Más tipos de preguntas o niveles de dificultad.

---

## 📚 Licencia

Este proyecto fue creado con fines **educativos**. Puede reutilizarse para estudios personales o proyectos similares, respetando los créditos del equipo.

---

> “Crea, juega y aprende: el código también es diversión.” – Grupo 4 🎮
