import React from 'react';
import NavBar from './NavBar';
import { useForm } from '@mantine/form';
import { Container, Button } from '@mantine/core';
import { Group } from '@mantine/core';
import "./ResultsEntry.css";



const ResultsEntry = () => {

    const options = ['Viral load', 'CD4', 'Genotyping'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }

    const form = useForm(
        {
            initialValues: {
                collectionDate: '',
                reason: '',
                results: '',
                resultsDate: '',
                dateOfRejection: '',
                reasonForRejection: '',
                Comments: '',

            }

        }
    );

    validate: (values) => ({
        collectionDate: !values.collectionDate ? 'Date is required'
                      : null,
        reason: values.reason.equals("Selection one option") ? 'Select reason for the test'
                      : null,
        results: !values.results ? 'Results is required'
                : null,
        resultsDate: !values.resultsDate ? 'Results date required'
                   : null,
        dateOfRejection: !values.dateOfRejection ? 'Date of rejection required'
                   : null,
        // reasonForRejection: 
        // Comments: '',
    });

    return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header>
        <NavBar />
        </header>

        <center>
            <h3>Test Entry</h3>
            <Group position="left">
                <p>Patient's name</p>
                <input type='string'></input>
            </Group>

            <Group position="left">
                <p>Date of birth</p>
                <input type='number'></input>
            </Group>
                
            <Group position="left">
                <p>Test Type</p>
                <select onChange={onOptionChangeHandler}>

                    <option>Select a test type</option>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                    </option>
                    })}
                </select>
            </Group>

            <h2>Test results entry</h2>
            
            <form onSubmit={form.onSubmit((values)=> console.log(values))}>
                <Group>
                    <p>Date of sample collection</p>
                    <input 
                        label= ''
                        placeholder= ''
                        type="Date"
                        {...form.getInputProps('collectionDate')}
                    />
                </Group>

                <Group>
                    <p>Reason for the test</p>
                    <input 
                        label= ''
                        placeholder= 'Date'
                        type="String"
                        {...form.getInputProps('reason')}
                    />
                </Group>

                <Group>
                    <p>Reason for the test</p>
                    <input 
                        label= ''
                        placeholder= ''
                        type="String"
                        {...form.getInputProps('reason')}
                    />
                </Group>

                <Group>
                    <p>Test results</p>
                    <input 
                        label= ''
                        placeholder= ''
                        type="number"
                        {...form.getInputProps('results')}
                    />
                </Group>

                <Group>
                    <p>Date of results record</p>
                    <input 
                        label="results"
                        placeholder=""
                        type="date"
                        {...form.getInputProps('resultsDate')}
                    />
                </Group>

                <Group>
                    <p>Date of sample rejection</p>
                    <input 
                        label="rejectionDate"
                        placeholder=""
                        type="date"
                        {...form.getInputProps('dateOfRejection')}
                    />
                </Group>

                <Group>
                    <p>Reason for rejection</p>
                    <input 
                        label="rejectionReason"
                        placeholder=""
                        type="String"
                        {...form.getInputProps('reasonForRejection')}
                    />
                </Group>

                
                <Group>
                    <p>Comment</p>
                    <input 
                        label="comment"
                        placeholder=""
                        type="String"
                        {...form.getInputProps('comment')}
                    />
                </Group>

                <Group position="center" mt="md">
                    <Button type="submit" className="customButton">Submit</Button>
        
                </Group>

                

                    






            </form>


                


        </center>

        
    </Container>
    );
};

export default ResultsEntry;
