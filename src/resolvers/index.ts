import { Resolvers } from "../generated/graphql";
import { queryUserByID, userResolver } from "./user";
import { messageResolvers } from "./message";
import { conversationResolvers } from "./conversation";

const resolvers: Resolvers = {
  Query: {
    user: queryUserByID,
  },
  Conversation: conversationResolvers,
  Message: messageResolvers,
  User: userResolver,
};

export default resolvers;
