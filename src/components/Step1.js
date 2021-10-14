import React from "react";
import { FormGroup, } from "reactstrap";
import './Step1.css'


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
                <ul>
                    <li>
                        <input type="checkbox" id="cb1" />
                        <label for="cb1"><img src="/images/cotton.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb2" />
                        <label for="cb2"><img src="/images/chipbor.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb3" />
                        <label for="cb3"><img src="/images/bubblemailer.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb4" />
                        <label for="cb4"><img src="/images/chipbor.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb5" />
                        <label for="cb5"><img src="/images/envelops.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb6" />
                        <label for="cb6"><img src="/images/jute.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb7" />
                        <label for="cb7"><img src="/images/ridigbox.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb8" />
                        <label for="cb8"><img src="/images/plastic.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb9" />
                        <label for="cb9"><img src="/images/tiuse.png" alt="" /></label>
                    </li>
                    <li>
                        <input type="checkbox" id="cb10" />
                        <label for="cb10"><img src="/images/ridigbox.png" alt="" /></label>
                    </li>
                </ul>

            </FormGroup>
        </>
    );
};

export default Step1;
