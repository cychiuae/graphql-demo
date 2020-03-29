import { ConversationResolvers, QueryResolvers } from "../generated/graphql";

export const conversationResolvers: ConversationResolvers = {
  id: (conversaion) => conversaion.id,
  topic: (conversation) => conversation.topic,
  messages: (conversation, _args, context) =>
    context.chatDatasource.queryMessagesByConversationID(conversation.id),
  expensiveUnreadCount: (conversation, _args, context) =>
    context.chatDatasource.queryUnreadCountByConversationID(conversation.id),
};

export const queryConversationByID: QueryResolvers["conversation"] = (
  _root,
  args,
  context
) => {
  return context.chatDatasource.queryConversationByID(args.id);
};

export const queryAllConversations: QueryResolvers["conversations"] = (
  _root,
  _args,
  context
) => {
  return context.chatDatasource.queryAllConversaions();
};
