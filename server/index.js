
require('dotenv').config();
const mongoose = require('mongoose');
const password = process.env.DB_PASS
const uri = `mongodb+srv://ingpachinik96:${password}@cluster0.afjr7n7.mongodb.net/?appName=Cluster0` ;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
