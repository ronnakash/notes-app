import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";

export default interface IAuthContext {
    signIn : (form: ISigninForm) => Promise<void> | undefined
    signOut : () => Promise<void> | undefined 
    register : (form: ISignupForm) => Promise<void> | undefined
    signInWithGoogle : (googleUser : IUser) => void
    user : IUser | undefined
}