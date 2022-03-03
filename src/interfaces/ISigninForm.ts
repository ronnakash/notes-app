import IFormValues from "./IFormValues";

export default interface ISigninForm extends IFormValues {
    username: string;
    email: string;
    password: string;
}