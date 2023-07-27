import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import PropTypes from "prop-types";
import logo from "../lib/myHealthLogo.png";
import {Grid, Button, Container} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import './signup.css'

// const supabase = createClient("https://boktoqjaqpgmdqxdeuag.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva3RvcWphcXBnbWRxeGRldWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTkxMzQsImV4cCI6MjAwNTY5NTEzNH0.bXhTutBUkqBxHboCV55PLU7oJ4IM000YFUuz3KtSaGo");

function SignUp() {
    // const {user} = props; 
    const navigate = useNavigate();
    const [password, setPassword] = useState('');


    const navigateLogin = () => {
        navigate("/login");
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // useEffect(()=> {
    //     getUser();
    // });


    
    return (
        <Container>
            <img width="200"  src={logo} alt="MyHealth"/><br></br>

            <Grid>
                    <Grid.Col span={6}>
                        <div className="moveLeft">
                            <p className="inputsName">First name</p>
                            <input className="inputBox"></input> <br></br>
                        </div>
                        
                        <div className="moveLeft">
                            <p className="inputsName">Last name</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveLeft">
                            <p className="inputsName">Phone number</p>
                            <input className="inputBox" type="number"></input>
                        </div>

                        <div className="moveLeft">
                            <p type="email" className="inputsName">Email</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveLeft">
                            <p className="inputsName">Password</p>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={handlePasswordChange}
                                className="inputBox"/>
                        </div>


                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className="moveRight">
                            <p className="inputsName">Province</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveRight">
                            <p className="inputsName">District</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveRight">
                            <p className="inputsName">Sector</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveRight">
                            <p className="inputsName">Cell</p>
                            <input className="inputBox"></input>
                        </div>

                        <div className="moveRight">
                            <p className="inputsName">Confirm password</p>
                            <input className="inputBox" type="password"></input>
                        </div><br></br>
                    </Grid.Col>
                </Grid> 

            
            <Button className="customButton">Signup</Button>
            <div className="toLogin">
                <p className="haveAccount">have an account?</p>
                <p onClick={navigateLogin} className="login">login</p>
            </div>
            
        </Container>
    );
}

export default SignUp;







// <Grid>
//                 <Grid.col span={8}>
//                     {/* <p>First name</p> */}
//                     {/* <input ></input> <br></br>

//                     <h1>Last name</h1>
//                     <input ></input> <br></br>

//                     <h1>Phone number</h1>
//                     <input ></input> <br></br>

//                     <h1>Email</h1>
//                     <input ></input> <br></br>

//                     <h1>Password</h1>
//                     <input ></input> <br></br> */}
//                 </Grid.col>

//                 <Grid.col span={4}>
//                     {/* <p>Province</p> */}
//                     {/* <input ></input> <br></br>

//                     <h1>District</h1>
//                     <input ></input> <br></br>

//                     <h1>Sector</h1>
//                     <input ></input> <br></br>

//                     <h1>Cell</h1>
//                     <input ></input> <br></br>

//                     <h1>Confirm password</h1>
//                     <input ></input> <br></br> */}

//                 </Grid.col>
//             </Grid>