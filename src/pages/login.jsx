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
            <div >
                <img width="200"  src={myHealthLogo} alt="MyHealth"/><br></br>
                <Grid>
                    <Grid.Col span={4}>
                        <p className="text">Email/Phone number</p><br></br>
                        <p className="text">Password</p>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <input  
                            value={email}
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input  
                            value={password}
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        /><br></br><br></br>
                    </Grid.Col>
                </Grid>

                <Button className="customButton" onClick={signUp}>Login</Button><br></br><br></br>

                <Grid>
                    <Grid.Col span={7}>
                        <p className="text2">Don't have an account?</p>
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <p onClick={navigateSignup} className="text">Signup</p>
                    </Grid.Col>
                </Grid>
            </div>
        </Container>
    );

}



export default LogIn;