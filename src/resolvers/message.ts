import { MessageResolvers } from "../generated/graphql";

export const messageResolvers: MessageResolvers = {
  id: (message) => message.id,
  content: (message) => message.content,
  createdAt: (message) => message.createdAt.toISOString(),
  sender: async (message, _args, context) => {
    const sender = await context.userDataLoader.loadUserByID(message.senderID);
    if (sender == null) {
      throw new Error("Message sender not found");
    }
    return sender;
  },
};
