import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../lib/myHealthLogo.png";
import { TextInput, Grid, Checkbox, Button, Group, Box, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from "react-router-dom";
import './signup.css'
import supabase from "../lib/supabaseClient";


function SignUp() {
    // const {user} = props; 
    const navigate = useNavigate();
    // const [password, setPassword] = useState('');


    const navigateLogin = () => {
        navigate("/");
    }

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            hospital_name: '',
        },

        validate: (values) => ({
            email:  (/^\S+@\S+$/.test(values.email) ? null 
                 : 'Invalid email'),
            password: values.password.length < 8 ? 'Password must have at least 8 characters'
                    : !(/\d/.test(values.password)) ? 'Password must contain at least 1 digit'
                    : null,
            confirmPassword: values.password !== values.confirmPassword ? 'Passwords did not match'
                    : null,
            firstName: values.firstName.length < 2 ? 'First name is required'
                     : null,
            lastName: values.lastName.length < 2 ? 'Last name is required'
                    : null,
            hospital_name: values.hospital_name.length < 2 ? 'Hospital name is required'
                    : null,

        }),
    });    


    async function handleSignUp(values) {
        console.log("In handle");
            const {data, error} = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        hospital_name: values.hospital_name,
                    },
                },
                
            })
    }


    return (
        <Container>
            <img width="200"  src={logo} alt="MyHealth"/>   <br></br>

            <form onSubmit={form.onSubmit((values) => handleSignUp(values))}>
            <Grid>
            <Grid.Col span={6}>
                <Box maw={300} mx="auto">

                    <p>First Name</p>

                    <TextInput
                        label="First Name"
                        placeholder="First Name"
                        required
                        type="String"
                        {...form.getInputProps('firstName')}
                    />

                    
                    <p>Email</p> 

                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        type="email"
                        required
                        {...form.getInputProps('email')}
                    />

                    <p>Password</p>

                    <TextInput
                        required
                        label="Password"
                        placeholder="password"
                        type="password"
                        {...form.getInputProps('password')}
                    />

                </Box>

            </Grid.Col>


            <Grid.Col span={6}>
                <Box maw={300} mx="auto">

                    <p>Last Name</p>

                    <TextInput
                        label="Last Name"
                        placeholder="Last Name"
                        required
                        type="String"
                        {...form.getInputProps('lastName')}
                    />

            
                    <p>Hospital Name</p> 

                    <TextInput
                        required
                        label="hospital_name"
                        placeholder="Hospital Name"
                        type="String"
                        {...form.getInputProps('hospital_name')}
                    />

                    <p>Confirm password</p>

                    <TextInput
                        required
                        label="Confirm password"
                        placeholder="password"
                        type="password"
                        {...form.getInputProps('confirmPassword')}
                    />

                </Box>

            </Grid.Col>

            </Grid> 
                <Group position="center" mt="md">
                    <Button type="submit" className="customButton">Submit</Button>        
                </Group>
                <Group position ="center" >
                    <p className="spaceBetween">Already have an account?</p>
                    <p onClick={navigateLogin} className="signup">login</p>
                </Group>
            </form>
        </Container>
    );
}

export default SignUp;