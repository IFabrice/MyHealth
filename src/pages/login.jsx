import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Button, Container } from "@mantine/core";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import myHealthLogo from "../lib/myHealthLogo.png"
import './login.css';


function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    }

    const navigateSignup = () => {
        navigate("/signup");
    }    

    return (
        <Container>
                <img width="200"  src={myHealthLogo} alt="MyHealth"/><br></br>

                <div>
                    <p>Email</p>
                    <input type="email" className="inputBox"></input>
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" className="inputBox"></input>
                </div> <br></br>


                <Button className="customButton" onClick={signUp}>Login</Button><br></br><br></br>

                <div className="sameRow">
                    <p className="spaceBetween">Don't have an account?</p>
                    <p onClick={navigateSignup} className="signup">signup</p>
                </div>

        </Container>
    );

}



export default LogIn;