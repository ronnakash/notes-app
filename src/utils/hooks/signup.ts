import { useState, useEffect } from 'react';
import ISignupForm from '../../interfaces/SignupForm';
import ISignupFormError from '../../interfaces/SignupFormError'
import useForm from './useForm';


const useSignUpForm = (callback : (values : ISignupForm) => void ) : {handleChange : (event : any) => void, handleSubmit : (event : any) => void, values : ISignupForm, errors : ISignupFormError} => {

  let emptyValues : ISignupForm = {
    username: '',
    email: '',
    password1: '',
    password2: ''
  }

    let emptyErrors : ISignupFormError = {
        username: undefined,
        email: undefined,
        password1: undefined,
        password2: undefined
    }; 

    function validateInfo(values : ISignupForm) {
        let errors : ISignupFormError = {
            username: undefined,
            email: undefined,
            password1: undefined,
            password2: undefined
        };
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }
         else if (!/^[A-Za-z]+/.test(values.username.trim())) {
           errors.username = 'Enter a valid name';
         }
      
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password1) {
          errors.password1 = 'Password is required';
        } else if (values.password1.length < 6) {
          errors.password1 = 'Password needs to be 6 characters or more';
        }
      
        if (!values.password2) {
          errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password1) {
          errors.password2 = 'Passwords do not match';
        }
        return errors;
      }

      return useForm({callback, validateInfo, emptyValues, emptyErrors});

};

export default useSignUpForm;
