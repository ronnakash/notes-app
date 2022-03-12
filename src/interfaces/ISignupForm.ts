import IFormValues from "./IFormValues";

export default interface ISignupForm extends IFormValues {
    username: string;
    email: string;
    password1: string;
    password2: string;
}