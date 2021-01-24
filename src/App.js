import React, {Component } from 'react'
import './App.css';
import { Button, Form, FormGroup, Label, Input }
from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLogin } from 'react-google-login';


class App extends Component {
  render() {
    return (
      <Form className="login-form" action="https://www.facebook.com/r.php" target="-blank">
        <h1>
          <span className="font-weight-bold">MyWebsite New</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type='email' placeholder=' Email' />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type='password' placeholder='Enter Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters " required />
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block'>Login</Button>
        <div className="text-center pt-3">
          Or Continue with your social account
        </div>
        <Form className="login-form" action="https://www.google.com">
        <div className="text-center">
        <GoogleLogin className="mt-3 mb-3"   />
        </div>
        </Form>
        
        <FacebookLoginButton className="mt-1 mb-1"  />
        
        <div className="text-center">
          <a href="http://localhost:3002/" target="-blank" >Sign Up</a>
          <span className="p-2">|</span>
          <a href="/forget-password" target='-blank' >Forget Password</a> 
        </div>
      </Form>
    );
  }
}
export default App;   