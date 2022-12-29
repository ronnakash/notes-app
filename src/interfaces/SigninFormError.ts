import IFormErrors from "./FormErrors";

export default interface ISigninForm extends IFormErrors {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
}