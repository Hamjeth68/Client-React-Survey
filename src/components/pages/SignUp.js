import React, { Component } from 'react';
import UserForm from '../UserForm';
import '../../App.css';
import ChooseProduct from '../ChooseProduct';

export class SignUp extends Component {

  state = {
    step: 1,
    firstName: '',
    secondName: '',
    position: '',
    companyName: '',
    number: '',
    email: ''
  }

  //procede to next step 
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }


  //procede to previous step 
  preStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //handle form change 
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state;
    const { firstName, secondName, position, companyName, number, email } = this.state;
    const values = {
      firstName, secondName, position, companyName, number, email
    }
    switch (step) {
      case 1:
        return (
          <UserForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <ChooseProduct />
        )
      case 3:
        return (
          <h1>case 3</h1>
        )
      case 4:
        return (
          <h1>case 4</h1>
        )
      case 5:
        return (
          <h1>
            case 5
          </h1>
        )
      case 6:
        return (
          <h1>case 6</h1>
        )
      case 7:
        return (
          <h1>case 7</h1>
        )
      default:
    }
  }
}

export default SignUp;
