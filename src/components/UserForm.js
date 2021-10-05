import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';


export default class UserForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.preStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Card className='sign-up'>
                        <TextField fullWidth
                            hintText="Enter First Name"
                            floatingLabelText="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br />
                        <TextField fullWidth
                            hintText="Enter Second Name"
                            floatingLabelText="Second Name"
                            onChange={handleChange('secondName')}
                            defaultValue={values.secondName}
                        />
                        <br />
                        <TextField fullWidth
                            hintText="Enter Position"
                            floatingLabelText="Position"
                            onChange={handleChange('position')}
                            defaultValue={values.position}
                        />
                        <br />
                        <TextField fullWidth
                            hintText="Enter Company Name"
                            floatingLabelText="Company Name"
                            onChange={handleChange('companyName')}
                            defaultValue={values.companyName}
                        />
                        <br />
                        <TextField fullWidth
                            hintText="Enter Number"
                            floatingLabelText="Number"
                            onChange={handleChange('number')}
                            defaultValue={values.number}
                        />
                        <br />
                        <TextField fullWidth
                            hintText="Enter Email"
                            floatingLabelText="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br />
                        <RaisedButton
                            fullWidth
                            label="continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
