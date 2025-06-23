const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleName: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    default: "https://via.placeholder.com/150?text=No+Image" // default image URL
  },
  description: { type: String },
  brand: { type: String }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
