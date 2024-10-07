import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

// middleware do parsowania JSON i CORS
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(path.resolve(), "..", "FRONTEND", "dist")));
app.use(
  "/uploads",
  express.static(path.join(path.resolve(), "uploads/profileImages"))
);

// API
app.use("/api/employees", employeeRoutes);
app.use("/api/eventsCalendar", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
