export enum ApiMethods {
  GET,
  POST,
  PATCH,
  DELETE,
}

export type ApiError = {
  message: string | Record<string, unknown>;
  error: {
    errorCode: string;
    message: string;
  };
};
