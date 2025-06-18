import dotenv from "dotenv";
import mongoose from "mongoose";
import Employee from "../models/Employee.js";

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

    const scopeOfDutiesUpdateResult = await Employee.updateMany(
      {},
      { $set: { slack: "Slack.User.ID" } }
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
