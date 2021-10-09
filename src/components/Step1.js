import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step1 = props => {
    if (props.currentStep !== 1) {
        return null;
    }

    return (
        <>
            <p>Take Survey</p>
            <FormGroup>
                <h2>Choose your packaging type?
                </h2>
                <Label for="heading">Paperboard boxes
                </Label>
                <br />
                <Input type="checkbox" value={props.Paperboardboxes} onChange={props.handleChange} />

                <Label for="heading">Corrugated boxes
                </Label>
                <br />
                <Input type="checkbox" value={props.Corrugatedboxes} onChange={props.handleChange} />

                <Label for="heading">Plastic
                </Label>
                <br />
                <Input type="checkbox" value={props.Plastic} onChange={props.handleChange} />

                <Label for="heading">Rigid boxes
                </Label>
                <br />
                <Input type="checkbox" value={props.Rigidboxes} onChange={props.handleChange} />

                <Label for="heading">Chipboard packaging
                </Label>
                <br />
                <Input type="checkbox" value={props.Chipboardpackaging} onChange={props.handleChange} />

                <Label for="heading">Poly bags
                </Label>
                <br />
                <Input type="checkbox" value={props.Polybags} onChange={props.handleChange} />

                <Label for="heading">Foiled seal bags
                </Label>
                <br />
                <Input type="checkbox" value={props.Foiledsealbags} onChange={props.handleChange} />

                <Label for="heading">Cotton
                </Label>
                <br />
                <Input type="checkbox" value={props.Cotton} onChange={props.handleChange} />

                <Label for="heading">Jute
                </Label>
                <br />
                <Input type="checkbox" value={props.Jute} onChange={props.handleChange} />

                <Label for="heading">Envelopes
                </Label>
                <br />
                <Input type="checkbox" value={props.Envelopes} onChange={props.handleChange} />

                <Label for="heading">Bubble mailers
                </Label>
                <br />
                <Input type="checkbox" value={props.Bubblemailers} onChange={props.handleChange} />

                <Label for="heading">Styrofoam (polystyrene)
                </Label>
                <br />
                <Input type="checkbox" value={props.Styrofoampolystyrene} onChange={props.handleChange} />

                <Label for="heading">Kraft paper (packing paper)
                </Label>
                <br />
                <Input type="checkbox" value={props.Kraftpaperpackingpaper} onChange={props.handleChange} />

                <Label for="heading">Tissue paper
                </Label>
                <br />
                <Input type="checkbox" value={props.Tissuepaper} onChange={props.handleChange} />

                {/* <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your First Name"
                    value={props.firstName} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                />
                <Label for="firstName">Enter Second Name</Label>
                <Input
                    type="text"
                    name="secondName"
                    id="secondName"
                    placeholder="Enter your Second Name"
                    value={props.secondName} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                />
                <Label for="firstName">Designation in the Company</Label>
                <Input
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Enter your Position"
                    value={props.position} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                />
                <Label for="firstName">Enter Your Company Name</Label>
                <Input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company Name"
                    value={props.companyName} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                />
                <Label for="firstName">Contact Number</Label>
                <Input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Contact Number"
                    value={props.number} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                />
                <Label for="firstName">Email Address</Label>
                <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={props.email} // Prop: The email input data
                    onChange={props.handleChange} // Prop: Puts data into the state
                /> */}
            </FormGroup>
        </>
    );
};

export default Step1;
