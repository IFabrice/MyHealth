import { useEffect, useState } from "react";
import { TextInput, Checkbox, Button, Group, Box, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import myHealthLogo from "../lib/myHealthLogo.png"
import PropTypes from "prop-types";
import './login.css';


function LogIn(props) {

    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
    },

        validate: (values) => ({
            email:  (/^\S+@\S+$/.test(values.email) ? null 
                 : 'Invalid email'),
            password: values.password.length < 8 ? 'Password must have at least 8 characters'
                    : !(/\d/.test(values.password)) ? 'Password must contain at least 1 digit'
                    : null,
        }),
    });

    // const user = supabase.auth.user();

    const verifyAuth = () => user? isAuthenticated=true:false;   // Check if there an authenticated user
    

    
    async function signInWithPassword(values) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        })

        if (error) {
            console.log("There is an error", error);
        }


        if (data) navigate("/home");
        else console.log("Login failed!!")
    }

    const navigateSignup = () => {
        navigate("/signup");
    }   


    return (

        <Box maw={300} mx="auto">
            <img width="200"  src={myHealthLogo} alt="MyHealth"/><br></br>

            <form onSubmit={form.onSubmit((values) => signInWithPassword(values))}>

                <p>Email</p> 

                <TextInput
                    
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

                <p>Password</p>

                <TextInput
                    
                    label="Password"
                    placeholder="password"
                    type="password"
                    {...form.getInputProps('password')}
                />

                <Group position="center" mt="md">
                    <Button type="submit" className="customButton">Submit</Button>
                    <div className="sameRow">
                        <p className="spaceBetween">Don't have an account?</p>
                        <p onClick={navigateSignup} className="signup">signup</p>
                    </div>
                </Group>
            </form>
        </Box>
        );

}



export default LogIn;
