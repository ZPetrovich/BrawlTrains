import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import PlusMinusExpressions from "../Math/PlusMinusExpressions";
import {ENGLISH, ENGLISH_4_FORMS, ENGLISH_S_OR_NOT, MATH, MATH_MUL_DIV, MATH_PLUS_MINUS} from "../../App";
import English4Forms from "../English/EnglishForms/EnglishForm";
import EnglishChoicer from "../English/EnglishChoicer";
import MathChoicer from "../Math/MathChoicer";
import EnglishSorNot from "../English/SorNot/EnglishSorNot";
import MulDivExpressions from "../Math/MulDivExpressions";

const SCORE_STYLE = makeStyles({
    root: {
        fontSize: "xxx-large",
    },
});

const ChallengeCard = (props) => {
    const scoreStyle = SCORE_STYLE();

    const [totalCards, setTotalCards] = React.useState();

    const [cardNumber, setCardNumber] = React.useState(1);

    const [showResults, setShowResults] = React.useState(false);

    const [firstAnswer, setFirstAnswer] = React.useState(true);

    const [score, setScore] = React.useState(0);

    function calculateResult(scoreParam) {
        if (firstAnswer) {
            console.log('total score', score);
            console.log('given score', scoreParam);

            setScore(prevScore => prevScore + scoreParam);
            setFirstAnswer(false);
        }
    }

    function onTryAgainHandler() {
        setShowResults(false);
        setScore(0);
    }

    const onTotalCardsHandler = (total) => {
        setTotalCards(total);
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
                <h1 className={scoreStyle.root}>{Math.floor(score)}</h1>
                <Button variant="contained"
                        color="primary"
                        onClick={props.onBack}>
                    Home
                </Button>

                &nbsp;&nbsp;&nbsp;

                <Button variant="contained"
                        color="primary"
                        onClick={onTryAgainHandler}>
                    Try again
                </Button>
            </div>
        )
    }

    // return <h2>It is OK</h2>
    if (props.type === ENGLISH) {
        return <EnglishChoicer
            onTotalCards={onTotalCardsHandler}
            onChoice={props.onChoice}
            onBack={props.onBack}
        />
    } else if (props.type === MATH) {
        return <MathChoicer
            onTotalCards={onTotalCardsHandler}
            onChoice={props.onChoice}
            onBack={props.onBack}
        />
    } else if (props.type === ENGLISH_4_FORMS) {
        return <English4Forms
            cardNumber={cardNumber}
            totalCards={totalCards}
            onBack={props.onBack}
            onNext={nextButtonCommonHandler}
            onCalculateResult={calculateResult}
        />
    } else if (props.type === ENGLISH_S_OR_NOT) {
        return (
            <div>
                <h3>Question {cardNumber} / {totalCards}</h3>
                <EnglishSorNot
                    onBack={props.onBack}
                    onNext={nextButtonCommonHandler}
                    onCalculateResult={calculateResult}/>
            </div>
        )
    } else if (props.type === MATH_PLUS_MINUS) {
        return (
            <div>
                <h3>Question {cardNumber} / {totalCards}</h3>
                <PlusMinusExpressions onBack={props.onBack}
                                      onNext={nextButtonCommonHandler}
                                      onCalculateResult={calculateResult}/>
            </div>);
    } else if (props.type === MATH_MUL_DIV) {
        return (
            <div>
                <h3>Question {cardNumber} / {totalCards}</h3>
                <MulDivExpressions onBack={props.onBack}
                                   onNext={nextButtonCommonHandler}
                                   onCalculateResult={calculateResult}/>
            </div>);
    } else {
        console.log(props.type);
        return <div>I am empty here!</div>
    }

}

export default ChallengeCard;
