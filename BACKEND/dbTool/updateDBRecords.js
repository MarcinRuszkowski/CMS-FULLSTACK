import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = "CMS_DB";
const collectionName = "employees"; // nazwa kolekcji

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateProfileImages() {
  try {
    // Łączymy się z MongoDB
    await client.connect();
    console.log("Połączono z MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const updateResult = await collection.updateMany(
      { profileImage: { $exists: false } },
      {
        $set: { profileImage: null },
      }
    );

    console.log(
      `Zaktualizowano ${updateResult.modifiedCount} dokumentów w kolekcji ${collectionName}`
    );
  } catch (error) {
    console.error("Wystąpił błąd:", error.message);
  } finally {
    await client.close();
  }
}

updateProfileImages();
