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

export interface ICreateThreadAction {
  description: string;
  userId: string;
}

export interface IAddCommentAction {
  comment: string;
  threadId: string;
  userId: string;
  pathname: string;
}
