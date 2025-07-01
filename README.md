# Backend de API de Eventos de Calendario (MERN)

> API REST para una aplicación de eventos de calendario. Gestiona autenticación, autorización y CRUD completo de eventos, lista para integrarse con el front‑end en React y desplegarse en **Railway**.

---

## ✨ Funcionalidades principales

* **Autenticación de usuarios** — Registro e inicio de sesión con contraseñas hasheadas (bcryptjs)
* **JWT** — Emisión y renovación de JSON Web Tokens para proteger rutas privadas
* **Validaciones** — Validación exhaustiva de peticiones con *express‑validator*
* **CRUD de eventos** — Crear, listar, actualizar y eliminar eventos (título, notas, fecha‑hora de inicio y fin)
* **Middleware modular** — Manejador centralizado de errores, guard de autenticación y utilidades de validación
* **ODM Mongoose** — Modelos y validación de esquemas en MongoDB
* **Configuración por entorno** — Variables `.env` y registros listos para producción
* **Compatible con Railway** — Despliegue con un solo comando mediante Railway CLI

---

## 🛠️ Tecnologías

| Capa              | Librería / Herramienta        |
| ----------------- | ----------------------------- |
| Runtime           | Node.js 20 LTS                |
| Framework web     | Express · express‑validator   |
| Base de datos ODM | MongoDB Atlas · Mongoose      |
| Autenticación     | JSON Web Token (jsonwebtoken) |
| Seguridad         | bcryptjs · cors      |
| Utilidades dev    | nodemon · dotenv              |
| Despliegue        | Railway                       |

---

**Seduciendo corazones y sistemas**
