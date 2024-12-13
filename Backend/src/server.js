import dotenv from "dotenv"; // variables de entorno
import { connectDB } from "../src/bd/bd.js";
import { app } from "./app.js"; // Mantén la instancia de `app`

dotenv.config(); // Cargar variables de entorno desde .env

// Conectar a MongoDB Atlas
connectDB();
// Configuración del servidor

const PORT = process.env.PORT || 6000; 

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up on port http://localhost:${PORT}`);
});