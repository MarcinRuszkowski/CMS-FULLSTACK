import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  company: { type: String, require: true },
  job: { type: String, require: true },
  department: { type: String, require: true },
  city: { type: String, require: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
