import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Button, Container } from "@mantine/core";
import supabase from "../lib/supabaseClient";
import './login.css';


function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    }
    

    return (
        <Container>
            <div >
                <img src="../lib/myHealthLogo.png" alt="MyHealth"/>
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
                        <p className="text">Signup</p>
                    </Grid.Col>
                </Grid>
            </div>
        </Container>
    );

}



export default LogIn;