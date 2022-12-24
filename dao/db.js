import mongoose from "mongoose";
import { connectionURI } from "../utils/constants.js";
import Job from "../models/jobModel.js";
const connectDB = async () => {
  try {
    await mongoose.connect(connectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
