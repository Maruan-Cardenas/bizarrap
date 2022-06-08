import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const OffertsSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: [true, "Please provide a uri of offert."],
  },
  title: {
    type: String,
    required: [true, "Please provide a title of offert."],
  },
  category: {
    type: String,
    required: [true, "Please provide a category of offert."],
  },
  subcategory: {
    type: String,
    required: [true, "Please provide a subcategory of offert."],
  },
});

export default mongoose.models.offerts ||
  mongoose.model("offerts", OffertsSchema);
