import mongoose, { Mongoose } from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

// Server actions not remember what it done before, so we need cache to know each server actions do
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  // Nextjs fucntion will be invoke multiple times
  // Without caching, it will make overhead becase it is reopen and closing the connection to the database
  // this singleton pattern will allow us to declare the connection once and maintains that single instance to the connection, it is improve performance an dreliability
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("Using existing mongoose connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "devflow",
      })
      .then((result) => {
        logger.info("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        logger.error("Error connecting to MongoDB", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;

// THIS FUNCTION HELP US TO CONNECT TO MONGODB DATABASE WITHOUT ESTABLISH NEW CONENCTION