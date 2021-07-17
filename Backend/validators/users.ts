import { body } from "express-validator";

const passwordMinLegth: number = 6;

export const registerValidations = [
  body("email", "enter email").isEmail().withMessage("incorrect email"),
  body("fullname", "enter fullname").isString(),
  body("passwordRepeat", "enter password repeat").isString().custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords are not the same");
    } else {
      return value;
    }
  }),
  body("password", "enter password")
    .isLength({ min: passwordMinLegth })
    .withMessage("need 6 letters or more")

];

