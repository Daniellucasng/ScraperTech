import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;
if (!URI) {
  throw new Error("Falta definir MONGODB_URI en las variables de entorno (.env)");
}

const client = new MongoClient(URI);
let dbInstance: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (dbInstance) return dbInstance;
  try {
    await client.connect();
    dbInstance = client.db("comparador_gt");
    console.log("✅ Conectado a MongoDB Atlas");
    return dbInstance;
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  }
}

export const getDb = () => {
  if (!dbInstance) throw new Error("Database not initialized. Call connectDB first.");
  return dbInstance;
};

