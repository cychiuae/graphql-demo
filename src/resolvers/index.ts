import { Resolvers } from "../generated/graphql";
import { queryUserByID, userResolver } from "./user";
import { messageResolvers } from "./message";
import {
  conversationResolvers,
  queryConversationByID,
  queryAllConversations,
} from "./conversation";
import { companyResolvers, queryCompanyByID } from "./company";

const resolvers: Resolvers = {
  Query: {
    company: queryCompanyByID,
    conversation: queryConversationByID,
    conversations: queryAllConversations,
    user: queryUserByID,
  },

  Company: companyResolvers,
  Conversation: conversationResolvers,
  Message: messageResolvers,
  User: userResolver,
};

export default resolvers;
