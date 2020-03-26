import { Resolvers } from "../generated/graphql";
import { queryUserByID, userResolver } from "./user";
import { messageResolvers } from "./message";
import { conversationResolvers, queryConversationByID } from "./conversation";

const resolvers: Resolvers = {
  Query: {
    conversation: queryConversationByID,
    user: queryUserByID,
  },

  Conversation: conversationResolvers,
  Message: messageResolvers,
  User: userResolver,
};

export default resolvers;
