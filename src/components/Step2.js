import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Step2 = props => {
    const [value, setValue] = React.useState('average')

    const handleSubmit = (event) => {
        setValue(event.target.value);
    };
    if (props.currentStep !== 2) {
        return null;
    }
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Quality Of The Packing ?</FormLabel>
                <RadioGroup
                    aria-label="Quality Of The Packing ?"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleSubmit}
                >
                    <FormControlLabel value="average" control={<Radio />} label="average" />
                    <FormControlLabel value="EuropeanStandard" control={<Radio />} label="EuropeanStandard" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default Step2;

