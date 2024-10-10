import { MongoClient } from "mongodb";
import { readFile } from "fs/promises";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = "CMS_DB";

const collectionName = "absence"; // nazwa nowej kolekcji

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertDataFromJson() {
  try {
    const data = await readFile("absence.json", "utf8"); // plik JSON
    const records = JSON.parse(data);

    await client.connect();
    console.log("Połączono z db");

    const db = client.db(dbName);

    const collection = db.collection(collectionName);
    const result = await collection.insertMany(records);
    console.log(`${result.insertedCount} dodano do kolekcji ${collectionName}`);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  } finally {
    await client.close();
  }
}

insertDataFromJson();
