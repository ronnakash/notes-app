import IFormValues from "./IFormValues";

export default interface ISignupForm extends IFormValues {
    username: string;
    email: string;
    password: string;
    password2: string;
}