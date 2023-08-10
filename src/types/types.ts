export type RegisterT = {
  email: string;
  password: string;
};

export type LoginT = {
  email: string;
  password: string;
};

export type ResetPasswordT = {
  email: string;
  password: string;
};

export type UserT = {
  id: string;
  email: string;
  token: string;
};

export type PostT = {
  id: string;
  title: string;
  category: string;
  content: string;
  image: string;
};
