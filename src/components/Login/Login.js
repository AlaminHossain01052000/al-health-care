import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import googleLogo from "../../img/google-logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { emailSignIn, googleSignIn, logOut } = useFirebase();

    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        emailSignIn(email, password);

    }
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="login-page">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" onBulur={getEmail} placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" onBlur={getPassword} placeholder="Password" />
                </Form.Group>
                <Button className="btn-submit" type="submit" onClick={handleSignIn}>
                    Submit
                </Button>
                <Button className="btn-submit" type="submit" onClick={handleLogOut}>
                    Logout
                </Button>
            </Form>
            <h1>Login Using  <img onClick={googleSignIn} className="google-img" src={googleLogo} alt="" /></h1>

            <h3>Don't Have An Account ? <Link to="/signup">Register</Link> Now</h3>
        </div>
    );
};

export default Login;