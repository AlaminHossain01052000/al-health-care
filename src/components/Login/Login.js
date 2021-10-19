import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleLogo from "../../img/google-logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { emailSignIn, googleSignIn, error } = useAuth();
    const history = useHistory();
    const location = useLocation();


    const getEmail = (e) => {
        setEmail(e.target.value);

    }
    const getPassword = e => {
        setPassword(e.target.value);
    }
    const redirect_uri = location.state?.from || "/home";

    const handleSignIn = (e) => {

        e.preventDefault();


        emailSignIn(email, password);

        history.push(redirect_uri)



    }



    return (
        <div className="login-page">
            {error && <p className="text-danger">Invalid Password or Email</p>}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" onBlur={getEmail} placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" onBlur={getPassword} placeholder="Password" />
                </Form.Group>
                <Button className="btn-submit" type="submit" onClick={handleSignIn}>
                    Login
                </Button>

            </Form>
            <h1>Login Using  <img onClick={googleSignIn} className="google-img" src={googleLogo} alt="" /></h1>

            <h3>Don't Have An Account ? <Link to="/signup">Register</Link> Now</h3>
        </div>
    );
};

export default Login;