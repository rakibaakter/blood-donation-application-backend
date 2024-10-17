import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  messege?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    messege: data.messege,
    data: data.data,
  });
};

export default sendResponse;
