import { useState, useEffect } from 'react';
import IFormErrors from '../../interfaces/IFormErrors';
import IFormValues from '../../interfaces/IFormValues';
import ISigninForm from '../../interfaces/ISigninForm';
import ISigninFormError from '../../interfaces/ISigninFormError'

interface FormProps <V extends IFormValues, E extends IFormErrors> {
    callback : (values : V) => void;
    validateInfo : (values: V) => E;
    emptyValues : V;
    emptyErrors : E
}


const useForm = <V extends IFormValues, E extends IFormErrors>(formProps : FormProps<V,E>) : {handleChange : (event : any) => void, handleSubmit : (event : any) => void, values : V, errors : E, isErrored : () => boolean} => {

    let {callback, validateInfo, emptyValues, emptyErrors} = formProps

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [values, setValues] = useState(emptyValues);

    const [errors, setErrors] = useState(emptyErrors);

    const isErrored = () => {
        for (const [key, val] of Object.entries(errors)){
            if (val) {
                return true;
            }
        }
        return false
    }

    const handleChange = (e : any) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    useEffect(() => {
        setErrors(validateInfo(values));
    }, [values])
    
  
    const handleSubmit = (e : any) => {
        e.preventDefault();
        if (!isSubmitting)
            {
                setErrors(validateInfo(values));
                setIsSubmitting(true);
                if (!isErrored()) callback(values);
            }
        setIsSubmitting(false)
    };
  
    return { handleChange, handleSubmit, values, errors ,isErrored};

}

export default useForm;