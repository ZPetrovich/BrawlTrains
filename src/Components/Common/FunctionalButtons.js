import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const CANCEL_BUTTON_STYLE = makeStyles({
    root: {
        float: "left",
    },
});

const FUNCTIONAL_BUTTON_STYLE = makeStyles({
    root: {
        // float: "left"
    },
});



function FunctionalButtons(props) {
    const cancelButtonStyle = CANCEL_BUTTON_STYLE();
    const functionalButtonStyle = FUNCTIONAL_BUTTON_STYLE();

    return (<div>
        <Button className={cancelButtonStyle.root} variant="contained" color="secondary"
                onClick={props.onCancel}>
            Cancel
        </Button>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Button className={functionalButtonStyle.root}
                variant="contained"
                color="primary"
                onClick={props.onCheck}>
            Check
        </Button>

        &nbsp;&nbsp;&nbsp;

        <Button className={functionalButtonStyle.root}
                variant="contained"
                color="primary"
                disabled={props.nextButtonDisabled}
                onClick={props.onNext}>
            Next
        </Button>
    </div>)
}

export default FunctionalButtons;
