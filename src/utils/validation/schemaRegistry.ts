import { userLoginSchema, userSchema } from "./schemas";

export const validationSchemaMap = {
  "user" : userSchema,
  "user-login": userLoginSchema,
};

export type ValidationTypes = keyof typeof validationSchemaMap;
