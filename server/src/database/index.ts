/**
 * 
 *  MongoDB Connect Example:  
      const MongoClient = require('mongodb').MongoClient;
      const uri = "mongodb+srv://atlas-user:<password>@cluster0-j79oa.mongodb.net/test?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true });
      client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
      });
 * 
 */
import { MongoClient } from "mongodb";
import { Listing } from "../lib/types";

// const un = "atlas-user";
// const pwd = "vVAv7jjz7b6XhfEK";
// const cluster = "cluster0-j79oa";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("main");

  return {
    listings: db.collection<Listing>("test_listings"),
  };
};
