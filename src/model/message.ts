export interface DataSourceMessage {
  id: string;
  createdAt: Date;
  content: string;
  conversationID: string;
  senderID: string;
}

export interface DataSourceConversation {
  id: string;
  topic: string;
  memberIds: string[];
}
