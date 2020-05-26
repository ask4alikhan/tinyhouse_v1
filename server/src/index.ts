/**
 * @USAGE: 
    $>  curl -X POST http://localhost:9000/delete-listing \
        -H 'Content-Type: application/json' \
        -d '{"id": "003"}'
 */

import express from "express";
import { ApolloServer } from "apollo-server-express";
// import { schema } from "./graphql";
import { listings } from "./listings";
import { typeDefs, resolvers } from "./graphql";

const app = express();
const port = 9000;
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/api" });

app.use(express.json());

app.get("/listings", (_req, res) => res.send(listings));

app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;
  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send("failed to delete listing");
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
