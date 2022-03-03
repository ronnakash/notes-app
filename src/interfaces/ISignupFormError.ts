import IFormErrors from "./IFormErrors";

export default interface ISignupFormError extends IFormErrors{
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    password2: string | undefined;

};