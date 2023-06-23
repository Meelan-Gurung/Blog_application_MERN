import mongoose from "mongoose";

const Connection = async (username, password) => {

  const URL = `mongodb+srv://${username}:${password}@cluster0.9kjr95f.mongodb.net/?retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, {useNewUrlParser: true})
    console.log('Database Connected Sucessfully.');
  } catch (error) {
    console.log('Error while connection to database', error);
  }
};

export default Connection