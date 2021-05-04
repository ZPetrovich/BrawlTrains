import React from "react";
import Button from "@material-ui/core/Button";
import EnglishStatement from "../English/EnglishStatement";
import {makeStyles} from "@material-ui/core/styles";
import Formula from "../Math/Formula";
import {ENGLISH, MATH} from "../../App";

const TOTAL_ENGLISH_CARDS = 4;
const TOTAL_MATH_CARDS = 12;

const SCORE_STYLE = makeStyles({
    root: {
        fontSize: "xxx-large",
    },
});

const ChallengeCard = (props) => {
    const scoreStyle = SCORE_STYLE();

    const [totalCards, setTotalCards] = React.useState(props.type === ENGLISH ? TOTAL_ENGLISH_CARDS : TOTAL_MATH_CARDS);

    const [cardNumber, setCardNumber] = React.useState(1);

    const [showResults, setShowResults] = React.useState(false);

    const [firstAnswer, setFirstAnswer] = React.useState(true);

    const [score, setScore] = React.useState(0);

    function calculateResult(score) {
        console.log('score', score);
        if (firstAnswer) {
            setScore(prevScore => prevScore + score);
            setFirstAnswer(false);
        }
    }

    function onTryAgainHandler() {
        setShowResults(false);
        setScore(0);
    }

    function nextButtonCommonHandler() {
        if (cardNumber === totalCards) {
            setCardNumber(1);
            setShowResults(true);
        } else {
            setCardNumber(prevCardNumber => prevCardNumber + 1);
        }

        setFirstAnswer(true);
    }

    console.log('props.type', props.type);

    if (showResults) {
        return (
            <div>
                <h2>You result is:</h2>
                <h1 className={scoreStyle.root}>{score}</h1>
                <Button variant="contained" color="primary"
                        onClick={props.onBack}>
                    Home
                </Button>

                &nbsp;&nbsp;&nbsp;

                <Button variant="contained" color="primary"
                        onClick={onTryAgainHandler}>
                    Try again
                </Button>
            </div>
        )
    }

    // return <h2>It is OK</h2>
    if (props.type === ENGLISH) {
        return <EnglishStatement onBack={props.onBack}
                                 onNext={nextButtonCommonHandler}
                                 onTryAgainHandler={onTryAgainHandler}
                                 onCalculateResult={calculateResult}/>
    }//  if(props.type === MATH)

    // setTotalCards(TOTAL_MATH_CARDS);
    return <Formula onBack={props.onBack}
                    onNext={nextButtonCommonHandler}
                    onTryAgainHandler={onTryAgainHandler}
                    onCalculateResult={calculateResult}/>
}

export default ChallengeCard;
