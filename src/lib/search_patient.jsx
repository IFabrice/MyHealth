import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Button, Grid, Group, Box } from '@mantine/core';
import supabase from './supabaseClient';
import customButton from './customButton.css'

const Search_patient = () => {

    const {firstName, setFirstName} = useState(null);
    const {lastName, setLastName} = useState(null);
    const {searchEmail, setSearchEmail} = useState(null);
    const {patientUser, setPatientUser} = useState(null);
    const {dob, setDob} = useState(null);


    const onSexChangeHandler = (event) => {
        console.log("User selected value-", event.target.value)
    }

    const birth_assigned_sex = ['male', 'female']; 

    async function getUserByName(firstName, lastName) {
        const {user, error} = await supabase
            .from('Users')
            .select('user_id')
            .eq('firstName', firstName)
            .eq('lastName', lastName)
            .single();
        if (error) {
            console.error("Error fetching user", error.message);
            return null;
        }
        else {
            console.log("the user", user)

            setPatientUser(user) 

        }
    }

    async function getUserByEmail(searchEmail) {
        const cur_user = await supabase.auth.getUser();
        console.log("The current user is", cur_user)

        const {user, error} = await supabase.auth.getUser({email: searchEmail})
        if (error) {
            console.error("Couldn't fetch user", error.message);
        }
        else {
            console.log("the user", user);
            setCurrentUser(user);
        }

    }

    const getUser = (searchEmail, firstName, lastName) => {
        if (searchEmail != null) {
            getUserByEmail(searchEmail);
        }

        else if (firstName && lastName) {
            getUserByName(firstName, lastName);
        }
    }

    return (
        <center>
            <h3>Patient Search</h3>

            <Grid>
            <Grid.Col span={6}>
                <p position="center">First name</p>
                <input type='string' 
                    value={firstName} 
                    onChange={(e) =>setFirstName(e.target.value)}
                    position="center"/>

                <p position="center">Last name</p>
                <input type='string' 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    position="center"
                    />

                <p position="center">Date of birth</p>
                <input type='date' position="center"/>

            </Grid.Col>

            <Grid.Col span={6}>
                <p position="center">Email</p>
                <input type='email' 
                    position="center"
                    value={searchEmail}
                    onChange={setSearchEmail}
                    />
                
                <p position="center">User ID</p>
                <input type='string' 
                    position="center"/>

                <p position="center">Sex assigned at birth</p>
                <select position="center" onChange={onSexChangeHandler}>

                    <option>Select sex</option>
                        {birth_assigned_sex.map((option, index) => {
                            return <option key={index} >
                            {option}
                    </option>
                    })}
                </select>

            </Grid.Col>
            </Grid> 

            <Button onClick={getUser} className='customButton'>Search</Button>            
                
            
        </center>
    )
}

export default Search_patient;
