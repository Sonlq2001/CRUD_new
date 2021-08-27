export type LoginDataDef = {
  email: string;
  password: string;
};

export type FromValue = {
  username: string;
  password: string;
};

export type AuthState = {
  accessToken: string | null;
};
