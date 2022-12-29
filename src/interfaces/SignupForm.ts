import FormValues from "./FormValues";

export default interface SignupFormValues extends FormValues {
    username: string;
    email: string;
    password1: string;
    password2: string;
}