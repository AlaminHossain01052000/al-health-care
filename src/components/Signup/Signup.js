import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Signup.css";
import googleLogo from "../../img/google-logo.png"
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibleError, setVisibleError] = useState(false);

    const { googleSignIn, emailSignUp, user, setDisplayName, error } = useAuth();

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    if (user.email) {
        setDisplayName(name);
    }

    const handleSignUp = (e) => {
        e.preventDefault();



        emailSignUp(email, password);

        if (error) {
            setVisibleError(true);
        }
    }


    return (
        <div className="signup-page">
            {
                visibleError && <p className="text-danger">Invalid Email or Password</p>
            }
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control onBlur={getName} type="name" placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>

                <Button className="btn-submit" type="submit" onClick={handleSignUp}>
                    Sign Up
                </Button>
                <p>or</p>
                <img onClick={googleSignIn} className="google-img" src={googleLogo} alt="" />
            </Form>

            <h4 className="mt-3">Already Registered ? Click <Link to="/login">Here</Link> To Login</h4>
        </div>
    );
};

export default Signup;