import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";

import resolvers from "./resolvers";
import { UserDataSource } from "./datasource/UserDataSource";
import { UserDataLoader } from "./dataloader/UserDataLoader";
import { ChatDataSource } from "./datasource/ChatDataSource";

const apolloServer = new ApolloServer({
  typeDefs: importSchema(path.join(__dirname, "..", "schema", "root.graphql")),
  resolvers: resolvers,
  context: () => {
    const chatDatasource = new ChatDataSource();
    const userDatasource = new UserDataSource();
    const userDataLoader = new UserDataLoader(userDatasource);
    return {
      chatDatasource,
      userDatasource,
      userDataLoader,
    };
  },
  playground: {
    settings: {
      "editor.theme": "dark",
    },
    tabs: [
      {
        endpoint: "http://localhost:3000/graphql",
      },
    ],
  },
});

const app = express();
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.listen(3000, () => {
  console.log("Starting server on 3000...");
});
