import { MongoClient } from "mongodb";
import { readFile } from "fs/promises";

const uri = "mongodb://localhost:27017";

const dbName = "CMS_DB";
const collectionName = "events"; // nazwa kolekcji

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertDataFromJson() {
  try {
    const data = await readFile("events.json", "utf8"); // nazwa pliku json
    const events = JSON.parse(data);

    await client.connect();
    console.log("połączono z db");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(events);
    console.log(`${result.insertedCount} dodano do db`);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  } finally {
    await client.close();
  }
}

insertDataFromJson();
