import React from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import './Step7.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Step7 = props => {
    const [open, setOpen] = React.useState(false);
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (props.currentStep !== 7) {
        return null;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '100%' }}>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={15}>
                            <Item>
                                <div className='textFormat'>
                                    <p> Transport mode of packaging? </p>
                                </div>
                                {/* <FormLabel>Quantity required annually ?</FormLabel> */}

                                <TextField
                                    id="demo-helper-text-aligned"
                                    type='text'
                                />
                                <div className='switch-btn'>

                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        <InfoIcon />
                                    </Button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"HELP"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                How packaging is transported from the supplier to manufacturer's location

                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Disagree</Button>
                                            <Button onClick={handleClose}>Agree</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>

                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};



export default Step7;
