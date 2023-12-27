export type TUser = {
  id: string | null;
  name: string | null;
  image: string | null;
};

export interface IThreadsCard {
  id: string;
  description: string;
  user: TUser;
  createdAt: Date;
}

export interface ICommentCard {
  id: string;
  comment: string;
  user: TUser;
  createdAt: Date;
}

export interface IFormAddComment {
  threadId: string;
}
