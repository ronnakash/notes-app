import IFormErrors from "./FormErrors";

export default interface ISignupFormError extends IFormErrors{
    username: string | undefined;
    email: string | undefined;
    password1: string | undefined;
    password2: string | undefined;

};