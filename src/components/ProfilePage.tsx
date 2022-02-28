import { Button, Form, Card } from 'react-bootstrap'
import AuthContext from '../utils/authContext'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useContext, useState } from 'react'

const ProfilePage = () => {

    const {user} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'f'
    }

    return (
        <div className="form-container">
            <div className='center'>
                <h1 className='profile-header'>Edit Profile</h1>
                <div className='user-profile-display'>
                        <div>
                        <UserAvatar className='bigAvatar' size="64" name={userInitials()} src={user?.picture}/>
                        </div>
                        <div className='userDisplayData'>
                            <span className='boldText'>{user?.username}</span>
                            <span className='greyText'>{user?.email}</span>
                        </div>
                    </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label className='black-text'>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter new username" defaultValue={user?.username}/>
                        <Form.Text className="text-muted">
                        change your username
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='black-text'>New password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='black-text'>Confirm new password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save changes" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        

    );

}

export default ProfilePage;