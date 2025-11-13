// controllers/auth.controller.js
import Usuario from "../models/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
  const { correo, password } = req.body

  try {
    // 1️⃣ Buscar usuario por correo
    const usuario = await Usuario.findOne({ where: { correo } })
    if (!usuario) return res.status(401).json({ message: "Usuario no encontrado" })

    // 2️⃣ Validar contraseña
    const validPassword = await bcrypt.compare(password, usuario.password)
    if (!validPassword) return res.status(401).json({ message: "Contraseña incorrecta" })

    // 3️⃣ Crear token JWT
    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    )

    // 4️⃣ Devolver token + datos del usuario
    res.json({
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error en el servidor" })
  }
}
