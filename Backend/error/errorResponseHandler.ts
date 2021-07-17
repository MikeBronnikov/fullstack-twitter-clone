import { Location, ValidationError } from "express-validator";

export const errorResponseHandler = (msg: string, param: any, location:Location = 'body', value: any ): ValidationError => {
    return {
        msg: msg,
        param,
        location: location,
        value,
    }
}