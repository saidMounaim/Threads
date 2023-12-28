export type TUser = {
  id: string | null;
  name: string | null;
  image: string | null;
};

export interface IComments {
  id: string;
  comment: string;
  userId: string;
  threadId: string;
  createdAt: Date;
}

export interface ILikes {
  id: string;
  userId: string;
  threadId: string;
  createdAt: Date;
}

export interface IThreadsCard {
  id: string;
  description: string;
  user: TUser;
  createdAt: Date;
  comments: IComments[];
  likes: ILikes[];
  hideComment: boolean;
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

export interface IFollowButton {
  followerId: string;
  followingId: string;
}
