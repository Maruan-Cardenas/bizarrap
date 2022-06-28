import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const OffertsSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: [true, "Please provide a uri of offert."],
  },
  imageUri: {
    type: String,
    required: [true, "Please provide a image uri of offert."],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price of offert."],
  },
  oldPrice: {
    type: Number,
    required: [true, "Please provide a old price of offert."],
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
  time: {
    type: String,
  },
});

export default mongoose.models.offerts ||
  mongoose.model("offerts", OffertsSchema);
