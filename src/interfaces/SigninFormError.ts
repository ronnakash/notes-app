import FormErrors from "./FormErrors";

export default interface SigninForm extends FormErrors {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
}