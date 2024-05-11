import { renderUniqueStylesheet } from 'astro/runtime/server/index.js';
import  mongoose  from 'mongoose';  // Import mongoose

// Define the schema for our data
const contactSchema = new mongoose.Schema({
  name: {type: String, 
    required: true, 
    unique: true},
  phoneNumber: String,
  photoUrl: String,
  funFact: String,
});

export const Contact = mongoose.model("Contacts", contactSchema)




