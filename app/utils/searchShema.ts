import * as yup from "yup";

export const searchSchema = yup.object({
  name: yup.string().max(50, "Максимум 50 символів").optional(),
});