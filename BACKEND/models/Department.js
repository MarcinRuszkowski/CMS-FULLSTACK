import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  room: { type: String, required: true },
});

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: false },
  address: { type: addressSchema, required: true },
  depEmail: { type: String, required: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  procedury: [{ type: String }],
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
