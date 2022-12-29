import FormErrors from "./FormErrors";

export default interface SignupFormError extends FormErrors{
    username: string | undefined;
    email: string | undefined;
    password1: string | undefined;
    password2: string | undefined;

};