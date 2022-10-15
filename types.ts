export interface chat {
  id: string;
  user: {
    image: string;
    name: string;
  };
  lastMessage: {
    text: string;
    createdAt: string;
  };
}

export type chats = chat[];

export type message = {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
  };
  createdAt: string;
};
