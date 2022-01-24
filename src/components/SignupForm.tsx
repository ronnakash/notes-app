import React, { Component } from 'react';
import ISignupForm from '../interfaces/ISignupForm';
import ISignupFormError from '../interfaces/ISignupFormError';

import useForm from '../utils/signup';

interface ISignupFormProps {
  submitForm : (event : any) => void
};

interface ISignupFormState {
  handleChange : (event: any) => void
  handleSubmit : (event: any) => void
  values : ISignupForm
  errors : ISignupFormError
}

const withHooksHOC = (Component: any) => {
  return (props: ISignupFormProps) => {
    let { handleChange, handleSubmit, values, errors } = useForm(props.submitForm);

    return <Component handleChange={handleChange}
      handleSubmit={handleSubmit} 
      values={values} 
      errors={errors} 
      {...props} />;
  };
};


class SignupForm extends Component<ISignupFormState> {

  render() {
    let { handleChange, handleSubmit, values, errors } = this.props;
    return (
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='form-input-login'>
            Already have an account? Login <a href='/login'>here</a>
          </span>
        </form>
      </div>
    );
  }

}

export default withHooksHOC(SignupForm)