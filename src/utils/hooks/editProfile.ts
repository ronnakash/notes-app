import IEditUserErrors from "../../interfaces/EditUserFormErrors";
import IEditUserForm from "../../interfaces/EditUserFrom";
import IUser from "../../interfaces/User";
import useForm from "./useForm";


const useEditUserForm = (callback : (values : IEditUserForm) => void, user : IUser | undefined) => {

    let emptyValues : IEditUserForm = {
        username: '',
        newPassword: '',
        confirmPassword: '',
        picUrl: ''
        // confirmChange: false
    };
    
    let emptyErrors : IEditUserErrors = {
        username: undefined,
        newPassword: undefined,
        confirmPassword: undefined,
        picUrl: undefined
    }; 

    const isValidUrl = (url : string) : boolean => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return urlPattern.test(url);
  }


    function validateInfo(values : IEditUserForm) {
        let errors : IEditUserErrors = emptyErrors;
        // if (!values.username && !values.newPassword && !values.confirmPassword){
        //     errors.username = `Can\'t send empty form`;
        //     errors.newPassword = `Can\'t send empty form`;
        //     errors.confirmPassword = `Can\'t send empty form`;
        //     return errors;
        // }
        if (values.username === user?.username)
            errors.username = `Can\'t change username to current one. Leave empty to not change it `;
        if (!values.confirmPassword && values.newPassword)
            errors.confirmPassword = `Confirm your password`
        if (!values.newPassword && values.confirmPassword)
            errors.newPassword = 'You only filled password confirmation'
        if (values.newPassword && values.confirmPassword && values.newPassword !== values.confirmPassword){
            errors.newPassword = `Passwords mismatch!`;
            errors.confirmPassword = `Passwords mismatch`;
        }
        if (values.picUrl != "" && !isValidUrl(values.picUrl))
            errors.picUrl = 'Please enter a valid URL';
        return errors;
    }

    let form = useForm({callback, validateInfo, emptyValues, emptyErrors});
    let isErroredBase = form.isErrored;
    form.isErrored = () => {
        return isErroredBase()
    };
    return useForm({callback, validateInfo, emptyValues, emptyErrors});

}

export default useEditUserForm;