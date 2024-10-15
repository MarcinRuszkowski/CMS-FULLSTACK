import express from "express";
import multer from "multer";
import {
  getAllEmployees,
  addEmployee,
} from "../controllers/employeeController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profileImages/"); // folder, w którym zapisywane są obrazy
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/", auth, getAllEmployees);
router.post("/", auth, upload.single("profileImage"), addEmployee);

export default router;
