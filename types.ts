export interface Chat {
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

export type Chats = Chat[];

export type Message = {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
  };
  createdAt: string;
};
