import EnglishStatement from "./EnglishStatement";
import React from "react";

const EnglishForm = props => {
    return (
        <div>
            <h3>Question {props.cardNumber} / {props.totalCards}</h3>
            <EnglishStatement onBack={props.onBack}
                              onNext={props.onNext}
                              onCalculateResult={props.onCalculateResult}/>
        </div>
    );
}

export default EnglishForm;
