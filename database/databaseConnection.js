import mongoose from "mongoose";
const dbURI = "mongodb+srv://ghoshaditi345:Aditi@cluster0.ciefaqe.mongodb.net/";

const connection = async () => {
  try {
    const db = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database Connected", db.connection.host);
  } catch (error) {
    console.error(error);
  }
};

export default connection;
