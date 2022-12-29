import IFormValues from "./FormValues";

export default interface ISigninForm extends IFormValues {
    username: string;
    email: string;
    password: string;
}