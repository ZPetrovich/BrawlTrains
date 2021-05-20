import Button from "@material-ui/core/Button";
import React from "react";

import classes from './EnglishChoicer.module.css';
import {ENGLISH_4_FORMS, ENGLISH_S_OR_NOT} from "../../App";
import functionalButtons from "../Common/FunctionalButtons.module.css";

const ENGLISH_S_OR_NOT_TOTAL_CARDS = 24;
const ENGLISH_4_FORMS_TOTAL_CARDS = 4;

const EnglishChoicer = props => {

    function fourFormsHandler() {
        props.onChoice(ENGLISH_4_FORMS);
        props.onTotalCards(ENGLISH_4_FORMS_TOTAL_CARDS);
    }

    function sOrNotHandler() {
        props.onChoice(ENGLISH_S_OR_NOT);
        props.onTotalCards(ENGLISH_S_OR_NOT_TOTAL_CARDS);
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
                    onClick={fourFormsHandler}>
                (+) / (-) / (?) / (o)
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button variant="contained" color="primary"
                    onClick={sOrNotHandler}>
                's' or not
            </Button>
        </div>
    );
}

export default EnglishChoicer;
