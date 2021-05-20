import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import functionalButtons from './FunctionalButtons.module.css';

const CANCEL_BUTTON_STYLE = makeStyles({
    root: {
        margin: "1rem auto",
        float: "left",
    },
});

const FUNCTIONAL_BUTTON_STYLE = makeStyles({
    root: {
        margin: "1rem auto",
        // width: "30%"
        // float: "left"
    },
});


function FunctionalButtons(props) {
    const cancelButtonStyle = CANCEL_BUTTON_STYLE();
    const functionalButtonStyle = FUNCTIONAL_BUTTON_STYLE();

    return (
        <div className={functionalButtons.button}>
            <Button
                className={functionalButtons.cancel}
                variant="contained"
                color="secondary"
                onClick={props.onCancel}>
                Cancel
            </Button>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Button
                className={functionalButtons.func}
                variant="contained"
                color="primary"
                onClick={props.onCheck}>
                Check
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button variant="contained"
                    color="primary"
                    disabled={props.nextButtonDisabled}
                    onClick={props.onNext}>
                Next
            </Button>
        </div>
    )
}

export default FunctionalButtons;
