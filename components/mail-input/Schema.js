import * as yup from "yup";

export const MailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please insert a valid email")
    .required("Email Required"),
});
