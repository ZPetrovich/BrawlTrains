import Input from "@material-ui/core/Input";
import React, {useRef} from "react";
import {all, create} from "mathjs";
import {makeStyles} from "@material-ui/core/styles";
import FunctionalButtons from "../Common/FunctionalButtons";
import {shuffle} from "../Common/Utils";

const config = {}
const math = create(all, config)

const useStyles = makeStyles({
    root: {
        fontSize: "x-large",
        color: "black",
        fontWeight: "normal"
    },
    input: {
        width: 42,
    },
});

const DEFAULT_EXPRESSIONS = [
    '87 - 12',
    '73 - 17',
    '91 - 18',
    '23 - 9',
    '71 - 15',
    '93 - 77',
    '19 + 37',
    '27 + 72',
    '41 - 18',
    '71 - 39',
    '89 - 88',
    '99 - 68',
    '24 - 19',
    '77 - 39',
    '25 + 67',
    '21 + 79',
    '37 - 9'
];

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ]
}

function Formula(props) {
    const classes = useStyles();

    const [answerValue, setAnswerValue] = React.useState(0);

    const [expressionIdx, setExpressionIdx] = React.useState(0);

    const [expressions, setExpressions] = React.useState(shuffle(DEFAULT_EXPRESSIONS));
    console.log('expressions' , expressions);

    const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);

    const handleInputChange = (event) => {
        setAnswerValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    function nextButtonHandler() {
        console.log('Next please', expressionIdx, expressions.length);
        setExpressionIdx(expressionIdx === expressions.length - 1 ? 0 : expressionIdx + 1);

        const expression = expressions[expressionIdx];
        console.log('expression = ', expression);

        props.onNext();
        setAnswerValue(0);

        setNextButtonDisabled(true);
    }

    const handleBlur = () => {
        if (answerValue < 0) {
            setAnswerValue(0);
        } else if (answerValue > 100) {
            setAnswerValue(100);
        }
    };

    const [inputRef, setInputFocus] = useFocus();

    function checkHandler() {
        const res = math.evaluate(expressions[expressionIdx]);
        console.log(res);
        console.log('answered', answerValue);
        const isCorrect = res === answerValue;
        console.log(isCorrect ? 'Correct!' : 'Wrong!');

        let score = 0;
        if (isCorrect) {
            setNextButtonDisabled(!isCorrect);
            score = 1;
        }
        props.onCalculateResult(score);
    }

    return (
        <div className='formula'>
            <div className='formula-item'>
                <span className={classes.root}>{expressions[expressionIdx]}<span>&nbsp;=&nbsp;</span>
                    <Input
                        // inputRef={inputRef}
                        className={classes.root}
                        value={answerValue}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </span>
            </div>

            <FunctionalButtons
                onCancel={props.onBack}
                onCheck={checkHandler}
                onNext={nextButtonHandler}
                nextButtonDisabled={nextButtonDisabled}/>
        </div>
    );
}

export default Formula;
