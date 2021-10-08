import React from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const quantities = [
    {
        value: 'kilogram',
        label: 'KG'
    },
    {
        value: 'Gram',
        label: 'G'
    },
    {
        value: 'milligram',
        label: 'MG'
    }
]


const Step3 = props => {
    const [quantity, setQuantity] = React.useState('kilogram');
    const handleChange = (event) => {
        setQuantity(event.target.value)
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (props.currentStep !== 3) {
        return null;
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>  <TextField
                                id="demo-helper-text-aligned"
                                type='number'
                            />

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    value={quantity}
                                    onChange={handleChange}
                                    helperText="Please select your currency"
                                >
                                    {quantities.map((option) => (
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



export default Step3;
