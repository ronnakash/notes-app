import FormValues from "./FormValues";

export default interface SigninForm extends FormValues {
    username: string;
    email: string;
    password: string;
}