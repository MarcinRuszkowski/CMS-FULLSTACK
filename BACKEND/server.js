import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";

import signupRoutes from "./routes/signupRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import authenticatedRoutes from "./routes/authenticatedRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;

connectDB();

app.use(express.json());
app.use(
  cors({
    // origin: "https://marcinruszkowski.vercel.app",
  })
);
app.use(
  "/uploads",
  express.static(path.join(path.resolve(), "uploads/profileImages"))
);

//API
app.use("/api/user", signupRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api", authenticatedRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/eventsCalendar", eventRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/api", (req, res) => {
  res.send("Server test");
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
