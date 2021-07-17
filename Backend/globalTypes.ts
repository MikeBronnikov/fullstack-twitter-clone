import { ValidationError } from "express-validator";

export enum ResultCodeEnum  {
    succsess = 0,
    error = 1
}
export interface liteErrorInterface {
msg: string
}
export interface ResponseInterface {
    errors?:  ValidationError[] ,
    ResultCode: ResultCodeEnum,
    data?: any,
    count?: number
}