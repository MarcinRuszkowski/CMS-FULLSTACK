import express from "express";
import { getEventsCalendar } from "../controllers/eventsCalendarController.js";

const router = express.Router();

router.get("/", getEventsCalendar);

export default router;
