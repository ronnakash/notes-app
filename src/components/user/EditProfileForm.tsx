import { useContext } from 'react';
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap'
import useForm from '../../utils/hooks/editProfile'
import API from '../../utils/requests/API';
import AuthContext from '../../utils/authContext'

const EditProfileForm = (props : {}) => {

  const {user, updateUser} = useContext(AuthContext);


  const submitForm = async () => {
    if(user) {
      let editedUser = await API.editProfile(values, user);
      if (editedUser){
        // editedUser.token  = user.token;
        updateUser(editedUser);
      }
    }
  }
    
    // const [validated, setValidated] = useState(false);

    const { handleChange, handleSubmit, values, errors, isErrored } = useForm(
      submitForm, user
    );

    return (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label className='black-text'>Username</Form.Label>
              <InputGroup hasValidation={true}>
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
                  Cool username!
                  </Form.Control.Feedback>
              </InputGroup>
              </Form.Group>
          </Row>
          <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label className='black-text'>New Password</Form.Label>
              <Form.Control 
              type="password" 
              name='newPassword'
              placeholder="New Password"
              onChange={handleChange}
              value={values.newPassword}
              isValid={!errors.newPassword && values.newPassword!==''}
              isInvalid={errors.newPassword? true : false}
               />
              <Form.Control.Feedback type="invalid">
                  {errors.newPassword}
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label className='black-text'>Confirm Password</Form.Label>
              <Form.Control
              type="password" 
              name='confirmPassword'
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.confirmPassword}
              isValid={!errors.confirmPassword && values.confirmPassword!==''}
              isInvalid={errors.confirmPassword? true : false}
               />
              <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
              </Form.Control.Feedback>
              </Form.Group>
          </Row>
          <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustomPicture">
                  <Form.Label className='black-text'>Picture</Form.Label>
                  <InputGroup hasValidation={true}>
                      <Form.Control
                      type="text"
                      placeholder="Picture URL"
                      aria-describedby="inputGroupPrepend"
                      onChange={handleChange}
                      name='picUrl'
                      value={values.picUrl}
                      isValid={!errors.picUrl && values.picUrl!==''}
                      isInvalid={(errors.picUrl? true : false) && values.picUrl!==''}
                      />
                      <Form.Control.Feedback type="invalid">
                          {errors.picUrl}
                      </Form.Control.Feedback>
                  </InputGroup>
              </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Check
              required={true}
              label="Confirm changes"
              name='confirmChange'
              // onChange={handleChange}
              // feedback="You must confirm changes before submitting."
              // feedbackType="invalid"
              />
          </Row>
          <div className="centered">
            <Button type="submit" >Save Changes</Button>
          </div>
        </Form>

    );
}

export default EditProfileForm;