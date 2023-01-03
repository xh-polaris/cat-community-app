export interface GetCommentsReq {
  // 作用域，如动态、帖子、评论
  scope: string;
  page: number;
  id: string;
}

export interface GetCommentsResp {
  code: number;
  msg: string;
  comments: Comment[];
}

export interface NewCommentReq {
  text: string;
  ownerId: string;
  type: string;
}

export interface NewCommentResp {
  code: number;
  msg: string;
}
