export interface IErrorData {
  error: string;
  message: string;
}

export interface IErrorResponse {
  status: number;
  data: IErrorData;
}
