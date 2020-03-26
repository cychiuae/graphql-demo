import { DataSourceMessage, DataSourceConversation } from "../model/message";

const ChatDatabase: {
  Message: DataSourceMessage[];
  Conversation: DataSourceConversation[];
} = {
  Conversation: [
    {
      id: "graphql-basic",
      topic: "GraphQL Introduction",
      memberIds: ["kenchan", "rickmak", "yinbb"],
    },
    {
      id: "sales",
      topic: "Sales",
      memberIds: ["maysis"],
    },
  ],
  Message: [
    {
      id: "message-1",
      createdAt: new Date(2020, 1, 1, 12, 0),
      content: "Hi",
      conversationID: "graphql-basic",
      senderID: "yinbb",
    },
    {
      id: "message-2",
      createdAt: new Date(2020, 1, 1, 12, 1),
      content: "What am I doing?",
      conversationID: "graphql-basic",
      senderID: "rickmak",
    },
    {
      id: "message-3",
      createdAt: new Date(2020, 1, 1, 12, 3),
      content: "Rich",
      conversationID: "sales",
      senderID: "maysis",
    },
    {
      id: "message-4",
      createdAt: new Date(2020, 1, 1, 12, 3),
      content: "Elliot. One more Please.",
      conversationID: "graphql-basic",
      senderID: "kenchan",
    },
  ],
};

export class ChatDataSource {
  async queryConversationByID(
    id: string
  ): Promise<DataSourceConversation | null> {
    console.log(`Query conversation: ${id}`);
    return ChatDatabase.Conversation.find((c) => c.id === id) ?? null;
  }

  async queryMessagesByConversationID(
    conversationID: string
  ): Promise<DataSourceMessage[]> {
    console.log(`Query messages for conversation: ${conversationID}`);
    return ChatDatabase.Message.filter(
      (m) => m.conversationID === conversationID
    );
  }
}
