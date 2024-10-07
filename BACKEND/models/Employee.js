import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  job: { type: String, required: true },
  department: { type: String, required: true },
  city: { type: String, required: true },
  profileImage: { type: String },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
