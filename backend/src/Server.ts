import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from 'express';
import { connectDB, getDb } from "./db";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para mantener el servidor "despierto" (Render / Cronjobs)
app.get("/ping", (req: Request, res: Response): void => {
  res.status(200).json({ status: "alive", message: "pong" });
});

// Endpoint global de búsqueda (debe ir antes del endpoint dinámico)
app.get("/search", async (req: Request, res: Response): Promise<void> => {
  const searchTerm = req.query.term as string;
  if (!searchTerm) {
    res.status(400).json({ error: "Search term is required" });
    return;
  }

  try {
    const db = getDb();
    const results = await db.collection("products")
      .find({ nombre: { $regex: searchTerm, $options: "i" } })
      .toArray();

    const mapped = results.map(r => ({
      id: r._id,
      nombre: r.nombre,
      precio: r.precio,
      tienda: r.tienda,
      categoria: r.categoria,
      url_producto: r.url_producto
    }));

    res.json({ data: mapped });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint dinámico para todas las categorías (mouse, keyboard, etc.)
app.get("/:category", async (req: Request, res: Response): Promise<void> => {
  const category = req.params.category.toLowerCase();
  
  // Excluimos favicons u otras peticiones basura
  if (category === "favicon.ico") {
    res.status(204).end();
    return;
  }

  try {
    const db = getDb();
    const results = await db.collection("products")
      .find({ categoria: category })
      .toArray();

    const mapped = results.map(r => ({
      id: r._id,
      nombre: r.nombre,
      precio: r.precio,
      tienda: r.tienda,
      url_producto: r.url_producto
    }));

    res.json({ data: mapped });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

// Iniciar base de datos primero, y luego el servidor
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
});


