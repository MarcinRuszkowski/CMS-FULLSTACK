import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  startDate: { type: String, required: true }, // DD-YY-YYYY dlatego String a nie Date
  endDate: { type: String, required: true },
  year: { type: Number, required: true },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
