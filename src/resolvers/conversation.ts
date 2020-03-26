import { ConversationResolvers } from "../generated/graphql";

export const conversationResolvers: ConversationResolvers = {
  id: (conversaion) => conversaion.id,
  topic: (conversation) => conversation.topic,
  messages: (conversation, _args, context) =>
    context.chatDatasource.queryMessagesByConversationID(conversation.id),
};
