import dotenv from "dotenv";
import mongoose from "mongoose";
import Employee from "../models/Employee.js"

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = "CMS_DB";

async function updateEmployeeRecords() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    });
    console.log("Połączono z MongoDB");

    const scopeOfDuties = [
      "Nic nie robienie",
      "Picie kawy",
      "Rozpowiadanie plotek",
      "obgadywanie przełożonego",
      "Narzekanie na pensje",
    ];

    const scopeOfDutiesUpdateResult = await Employee.updateMany(
      {},
      { $set: { scopeOfDuties: scopeOfDuties } }
    );

    console.log(
      `Zaktualizowano ${scopeOfDutiesUpdateResult.modifiedCount} dokumentów (scopeOfDuties) w kolekcji.`
    );
  } catch (error) {
    console.error("Wystąpił błąd:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

updateEmployeeRecords();
