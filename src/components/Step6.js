import React from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

import './Step6.css'


const countries = [
    {
        label: 'UK',
        value: 'United Kindom',
    },
    {
        label: 'USA',
        value: 'United States Of America',
    },
    {
        label: 'UAE',
        value: 'United Arab Emirates',
    }
]


const Step6 = props => {

    const [country, setCountry] = React.useState('United Kindom');
    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (props.currentStep !== 6) {
        return null;
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '100%' }}>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={15}>
                            <Item>
                                <div className='textFormat'>
                                    <p>Supplier Location ?</p>
                                </div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Select Supplier Location ?"
                                    value={country}
                                    onChange={handleChange}
                                    helperText="Please Select Supplier Location"

                                >
                                    {countries.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};



export default Step6;