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
            province: '',
            district: '',
            sector: '',
            cell: '',

        },

        validate: (values) => ({
            email:  (/^\S+@\S+$/.test(values.email) ? null 
                 : 'Invalid email'),
            password: values.password.length < 8 ? 'Password must have at least 8 characters'
                    : !(/\d/.test(values.password)) ? 'Password must contain at least 1 digit'
                    : null,
            confirmPassword: values.password !== values.confirmPassword ? 'Passwords did not match'
                    : null,
            phoneNumber: !/^\d+$/.test(values.phoneNumber) ? 'Password must be a number'
                       : null,
            firstName: values.firstName.length < 2 ? 'First name is required'
                     : null,
            lastName: values.lastName.length < 2 ? 'Last name is required'
                    : null,
            province: values.province.length < 2 ? 'Province is required'
                    : null,
            district: values.district.length < 2 ? 'District is required'
                    : null,
            sector: values.sector.length < 2 ? 'Sector is required'
                    : null,
            cell: values.cell.length < 2 ? 'Cell is required'
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
                        phoneNumber: values.phoneNumber,
                        province: values.province,
                        district: values.district,
                        sector: values.sector,
                        cell: values.cell,
                    },
                },
                
            })
    }

    const navigateSignup = () => {
        navigate("/signup");
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

                    <p>Last Name</p>

                    <TextInput
                        label="Last Name"
                        placeholder="Last Name"
                        required
                        type="String"
                        {...form.getInputProps('lastName')}
                    />

                    <p>Phone number</p>

                    
                    <TextInput
                        label="Phone number"
                        placeholder="Phone number"
                        required
                        type="number"
                        {...form.getInputProps('phoneNumber')}
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

                    <p>Province</p>

                    <TextInput
                        label="Province"
                        required
                        placeholder="Province"
                        type="String"
                        {...form.getInputProps('province')}
                    />

                    <p>District</p>

                    <TextInput
                        required
                        label="District"
                        placeholder="District"
                        type="String"
                        {...form.getInputProps('district')}
                    />

                    <p>Sector</p>

                    
                    <TextInput
                        required
                        label="sector"
                        placeholder="Sector"
                        type="String"
                        {...form.getInputProps('sector')}
                    />
                    <p>Cell</p> 

                    <TextInput
                        required
                        label="cell"
                        placeholder="Cell"
                        type="String"
                        {...form.getInputProps('cell')}
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