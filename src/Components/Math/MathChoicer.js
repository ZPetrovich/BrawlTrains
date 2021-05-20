import Button from "@material-ui/core/Button";

import classes from './MathChoicer.module.css';
import {MATH_MUL_DIV, MATH_PLUS_MINUS} from "../../App";
import functionalButtons from "../Common/FunctionalButtons.module.css";
import React from "react";

const MathChoicer = props => {
    function multipleDivideHandler() {
        props.onTotalCards(24);
        props.onChoice(MATH_MUL_DIV);
    }

    function plusMinusHandler() {
        props.onTotalCards(12);
        props.onChoice(MATH_PLUS_MINUS);
    }

    return (
        <div className={classes.buttons}>
            <Button
                className={functionalButtons.cancel}
                variant="contained"
                color="secondary"
                onClick={props.onBack}>
                Back
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button variant="contained" color="primary"
                    onClick={multipleDivideHandler}>
                * / :
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button variant="contained" color="primary"
                    onClick={plusMinusHandler}>
                + / -
            </Button>
        </div>
    );
}

export default MathChoicer;
