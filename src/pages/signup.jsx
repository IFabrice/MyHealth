import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import PropTypes from "prop-types";
import logo from "../lib/myHealthLogo.png";
import {Grid, Button, Container} from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import './signup.css'

// const supabase = createClient("https://boktoqjaqpgmdqxdeuag.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva3RvcWphcXBnbWRxeGRldWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTkxMzQsImV4cCI6MjAwNTY5NTEzNH0.bXhTutBUkqBxHboCV55PLU7oJ4IM000YFUuz3KtSaGo");

function SignUp() {
    // const {user} = props; 

    // useEffect(()=> {
    //     getUser();
    // });
    
    return (
        <Container>
            <img width="200"  src={logo} alt="MyHealth"/><br></br>

            <Grid>
                    <Grid.Col span={6}>
                        <div className="inputs">
                            <p className="inputsName">First name</p>
                            <input ></input> <br></br>
                        </div>
                        
                        <div className="inputs">
                            <p className="inputsName">Last name</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Phone number</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Email</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Password</p>
                            <input></input>
                        </div>


                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className="inputs">
                            <p className="inputsName">Province</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">District</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Sector</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Cell</p>
                            <input></input>
                        </div>

                        <div className="inputs">
                            <p className="inputsName">Confirm password</p>
                            <input></input>
                        </div>
                    </Grid.Col>
                </Grid>

            
            <Button>Signup</Button>
            <div className="toLogin">
                <p className="haveAccount">Have an account?</p>
                <p className="login">login</p>
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