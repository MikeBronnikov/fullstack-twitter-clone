export interface Tweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}
export interface FullTweet {
  _id: string
  text: string,
  publushTime: string
  likeCount: number
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}