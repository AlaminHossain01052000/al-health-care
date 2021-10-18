import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Signup.css";
import googleLogo from "../../img/google-logo.png"
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { googleSignIn, emailSignUp, } = useAuth();
    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        emailSignUp(email, password);


    }

    return (
        <div className="signup-page">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control type="name" placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>

                <Button className="btn-submit" type="submit" onClick={handleSignUp}>
                    Submit
                </Button>
                <p>or</p>
                <img onClick={googleSignIn} className="google-img" src={googleLogo} alt="" />
            </Form>

            <h4 className="mt-3">Already Registered ? Click <Link to="/login">Here</Link> To Login</h4>
        </div>
    );
};

export default Signup;