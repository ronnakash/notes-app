import { useState, useEffect } from 'react';
import ISignupForm from '../interfaces/ISignupForm';
import ISignupFormError from '../interfaces/ISignupFormError'


const useForm = (callback : Function) : {handleChange : (event : any) => void, handleSubmit : (event : any) => void, values : ISignupForm, errors : ISignupFormError} => {
    
    
    let emptyErrors : ISignupFormError = {
        username: undefined,
        email: undefined,
        password: undefined,
        password2: undefined
    };

    function validateInfo(values : ISignupForm) {
        let errors : ISignupFormError = {
            username: undefined,
            email: undefined,
            password: undefined,
            password2: undefined
        };
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }
        // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        //   errors.name = 'Enter a valid name';
        // }
      
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password needs to be 6 characters or more';
        }
      
        if (!values.password2) {
          errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password) {
          errors.password2 = 'Passwords do not match';
        }
        return errors;
      }

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState(emptyErrors);

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
