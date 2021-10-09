import React from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Step4.css'

const Step4 = props => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (props.currentStep !== 4) {
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
                                    <p>Quantity required annually ?</p>
                                </div>
                                {/* <FormLabel>Quantity required annually ?</FormLabel> */}
                                <TextField
                                    id="demo-helper-text-aligned"
                                    type='number'
                                />

                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};



export default Step4;
