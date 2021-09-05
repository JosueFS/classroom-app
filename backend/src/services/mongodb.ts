import mongoose from 'mongoose';

const mongo_url = String(process.env.MONGODB_URL);
const dbName = String(process.env.MONGODB_DBNAME);

async function connect() {
  try {
    await mongoose.connect(mongo_url, {
      bufferCommands: false,
      dbName: dbName,
      maxPoolSize: 10,
    });
  } catch (error) {
    console.log(`An unknown error occured: \n${error}`);
  }
}

export default connect;
