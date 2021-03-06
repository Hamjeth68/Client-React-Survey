import React, { Component } from "react";
import {
    Form,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import './MasterForm.css'

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
    constructor(props) {
        super(props);

        // Set the intiial input values
        this.state = {
            currentStep: 1,
            Paperboardboxes: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard'
            },
            Corrugatedboxes: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Plastic: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Rigidboxes: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Chipboardpackaging: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Polybags: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Foiledsealbags: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Cotton: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Jute: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Envelopes: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Bubblemailers: {
                type: 'Non recyclable',
                percent: 'Not a sustainable package',
                answer: 'no',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Styrofoampolystyrene: {
                type: 'Non recyclable',
                percent: 'Not a sustainable package',
                answer: 'no',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Tissuepaper: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Kraftpaperpackingpaper: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            MoldedPulpFiberPackaging: {
                type: 'Recyclable',
                percent: '100%',
                answer: 'yes',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },
            Airbagspillowbags: {
                type: 'Non recyclable',
                percent: 'Not a sustainable package',
                answer: 'no',
                average: 'Average Packing',
                EuropeanStandard: 'EuropeanStandard',
                KG: '',
                MG: '',
                G: ''
            },

        };

        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);

        // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    // Use the submitted data to set the state
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    // Trigger an alert on form submission
    handleSubmit = event => {
        event.preventDefault();
        const { Paperboardboxes, Corrugatedboxes, Plastic, Rigidboxes, Chipboardpackaging, Polybags, Foiledsealbags, Cotton, Jute, Envelopes, Bubblemailers, Styrofoampolystyrene, Tissuepaper, Kraftpaperpackingpaper, MoldedPulpFiberPackaging, Airbagspillowbags } = this.state;
        alert(`Your registration detail: \n 
        Paperboardboxes: ${Paperboardboxes} \n 
        Corrugatedboxes: ${Corrugatedboxes} \n
        Plastic: ${Plastic} \n
        Rigidboxes: ${Rigidboxes} \n
        Chipboardpackaging: ${Chipboardpackaging} \n
        Polybags: ${Polybags} \n
        Foiledsealbags: ${Foiledsealbags} \n
        Cotton: ${Cotton} \n
        Jute: ${Jute}\n
        Envelopes: ${Envelopes} \n
        Bubblemailers: ${Bubblemailers}\n
        Styrofoampolystyrene: ${Styrofoampolystyrene}\n
        Tissuepaper: ${Tissuepaper}\n
        Kraftpaperpackingpaper: ${Kraftpaperpackingpaper}\n
        MoldedPulpFiberPackaging: ${MoldedPulpFiberPackaging}\n
        Airbagspillowbags: ${Airbagspillowbags} \n`);
    };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 6 ? 7 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button color="secondary float-left" onClick={this._prev}>
                    Previous
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 7) {
            return (
                <Button color="primary float-right" onClick={this._next}>
                    Next
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    get submitButton() {
        let currentStep = this.state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 6) {
            return <Button color="primary float-right">Submit</Button>;
        }
        // ...else render nothing
        return null;
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Card>
                        <CardHeader>Sustainable IQ</CardHeader>
                        <CardBody>
                            <CardTitle>
                                <MultiStepProgressBar currentStep={this.state.currentStep} />
                            </CardTitle>
                            <CardText />
                            <Step1
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                Paperboardboxes={this.state.Paperboardboxes}
                                Corrugatedboxes={this.state.Corrugatedboxes}
                                Plastic={this.state.Plastic}
                                Rigidboxes={this.state.Rigidboxes}
                                Chipboardpackaging={this.state.Chipboardpackaging}
                                Polybags={this.state.Polybags}
                                Foiledsealbags={this.state.Foiledsealbags}
                                Cotton={this.state.Cotton}
                                Jute={this.state.Jute}
                                Envelopes={this.state.Envelopes}
                                Bubblemailers={this.state.Bubblemailers}
                                Styrofoampolystyrene={this.state.Styrofoampolystyrene}
                                Tissuepaper={this.state.Tissuepaper}
                                Kraftpaperpackingpaper={this.state.Kraftpaperpackingpaper}
                                MoldedPulpFiberPackaging={this.state.MoldedPulpFiberPackaging}
                                Airbagspillowbags={this.state.Airbagspillowbags}
                            />
                            <Step2
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                average={this.state.average}
                                EuropeanStandard={this.state.EuropeanStandard}
                            />
                            <Step3
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                KG={this.state.KG}
                                MG={this.state.MG}
                                G={this.state.G}
                            />
                            <Step4
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                            />
                            <Step5
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}

                            />
                            <Step6
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                            />
                            <Step7
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                            />
                        </CardBody>
                        <CardFooter className="footer">
                            {this.previousButton}
                            {this.nextButton}
                            {this.submitButton}
                        </CardFooter>
                    </Card>
                </Form>
            </>
        );
    }
}

export default MasterForm;
