import IEditUserErrors from "../../interfaces/IEditUserFormErrors";
import IEditUserForm from "../../interfaces/IEditUserFrom";
import IUser from "../../interfaces/IUser";
import useForm from "./useForm";


const useEditUserForm = (callback : (values : IEditUserForm) => void, user : IUser | undefined) => {

    let emptyValues : IEditUserForm = {
        username: '',
        newPassword: '',
        confirmPassword: ''
    };
    
    let emptyErrors : IEditUserErrors = {
        username: undefined,
        newPassword: undefined,
        confirmPassword: undefined
    }; 


    function validateInfo(values : IEditUserForm) {
        let errors : IEditUserErrors = {
            username: undefined,
            newPassword: undefined,
            confirmPassword: undefined
        }
        if (!values.username && !values.newPassword && !values.confirmPassword){
            errors.username = `Can${"'"}t send empty form`;
            errors.newPassword = `Can${"'"}t send empty form`;
            errors.confirmPassword = `Can${"'"}t send empty form`;
            return errors;
        }
        if (values.username === user?.username)
            errors.username = `Can${"'"}t change username to current one. Leave empty to not change it `;
        if (!values.confirmPassword && values.newPassword)
            errors.confirmPassword = `Confirm your password`
        if (!values.newPassword && values.confirmPassword)
            errors.newPassword = 'You only filled password confirmation'
        if (values.newPassword && values.confirmPassword && values.newPassword !== values.confirmPassword){
            errors.newPassword = `Passwords mismatch!`;
            errors.confirmPassword = `Passwords mismatch`;
        }
        return errors;
    }


    return useForm({callback, validateInfo, emptyValues, emptyErrors});

}

export default useEditUserForm;