import express from "express";
import multer from "multer";
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profileImages/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/", getAllEmployees);
router.post("/", upload.single("profileImage"), addEmployee);
router.put("/:id", upload.single("profileImage"), updateEmployee);

export default router;
