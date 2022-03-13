import React, { Component } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import ISignupForm from '../../interfaces/ISignupForm';
import ISignupFormError from '../../interfaces/ISignupFormError';

import useForm from '../../utils/hooks/signup';

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
      <div className='center'>
        <h1 className='signin-header'>Register</h1>
        <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label className='black-text'>Username</Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                name='username'
                value={values.username}
                isValid={!errors.username && values.username!==''}
                isInvalid={(errors.username? true : false) && values.username!==''}
                />
                <Form.Control.Feedback type="invalid">
                {errors.username}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                Username available
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className='black-text'>Email</Form.Label>
            <Form.Control
            type="email" 
            name='email'
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            isValid={!errors.email && values.email!==''}
            isInvalid={(errors.email? true : false) && values.email!==''}
            />
            <Form.Control.Feedback type="invalid">
                {errors.email}
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label className='black-text'>Password</Form.Label>
            <Form.Control 
            type="password" 
            name='password1'
            placeholder="Password"
            onChange={handleChange}
            value={values.password1}
            isValid={!errors.password1}
            isInvalid={(errors.password1? true : false) && values.password1!==''}
            />
            <Form.Control.Feedback type="invalid">
                {errors.password1}
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label className='black-text'>Confirm Password</Form.Label>
            <Form.Control 
            type="password" 
            name='password2'
            placeholder="Confirm Password"
            onChange={handleChange}
            value={values.password2}
            isValid={!errors.password2}
            isInvalid={(errors.password2? true : false) && values.password2!==''}
            />
            <Form.Control.Feedback type="invalid">
                {errors.password2}
            </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <div className='even'>
          <Button type="submit" >Submit form</Button>
          </div>
        </Form>
      </div>
    );
  }

}

export default withHooksHOC(SignupForm)