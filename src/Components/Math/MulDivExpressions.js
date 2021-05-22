import Input from "@material-ui/core/Input";
import FunctionalButtons from "../Common/FunctionalButtons";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {all, create} from "mathjs";
import {MATH_MUL_DIV_TOTAL_CARDS} from "./MathChoicer";
import {shuffle} from "../Common/Utils";

const config = {}
const math = create(all, config)

const SCORE_FACTOR = 0.5;

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

const EXCLUDED_MULTIPLIER = [1];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateMultiplier(withExclusions) {
    let mul = getRandomInt(0, 9);
    if (withExclusions) {
        while (EXCLUDED_MULTIPLIER.indexOf(mul) !== -1) {
            mul = getRandomInt(0, 9);
        }
    }
    return mul;
}

function generateMulExpression(withExclusions) {
    const mul1 = generateMultiplier(withExclusions);
    const mul2 = generateMultiplier(withExclusions);
    return {
        mul1,
        mul2,
        expression: `${mul1} * ${mul2}`
    };
}

function generateMathExpressionWithExclusions(withExclusions, expressions) {
    let exp = generateMulExpression(withExclusions);
    while (expressions.indexOf(exp.expression) !== -1) {
        exp = generateMulExpression();
    }
    return exp;
}

function generateExpressions(expressionsCount) {
    const half = expressionsCount / 2;
    let expressions = [];

    // mul
    for (let i = 0; i < half; i++) {
        const exp = generateMathExpressionWithExclusions(true, expressions);
        // console.log('mul exp', exp);
        expressions = [...expressions, exp.expression];
    }

    // div
    for (let i = 0; i < half; i++) {
        let exp = generateMathExpressionWithExclusions(false, []);
        while (exp.mul1 === 0 && exp.mul2 === 0) {
            exp = generateMathExpressionWithExclusions(false, []);
        }
        // console.log('generated exp', exp);

        const res = math.evaluate(exp.expression);
        let newExpression;
        if (exp.mul2 !== 0) {
            newExpression = `${res} / ${exp.mul2}`;
        } else if (exp.mul1 !== 0) {
            newExpression = `${res} / ${exp.mul1}`;
        } else {// avoid 0 / 0
            throw new Error('Can not 0 divide on 0!');
        }

        // console.log('new div expression', newExpression);

        // TODO avoid repetitions
        expressions = [...expressions, newExpression];
    }

    return shuffle(expressions);
}

const MulDivExpressions = props => {
    const classes = useStyles();

    const [answerValue, setAnswerValue] = React.useState('');

    const [expressionIdx, setExpressionIdx] = React.useState(0);

    const [expressions, setExpressions] = React.useState(generateExpressions(MATH_MUL_DIV_TOTAL_CARDS));
    // const [expressions, setExpressions] = React.useState(DEFAULT_EXPRESSIONS);
    console.log('expressions', expressions);

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
        setAnswerValue('');

        setNextButtonDisabled(true);
    }

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
        props.onCalculateResult(score * SCORE_FACTOR);
    }

    return (
        <div className='formula'>
            <div className='formula-item'>
                <span className={classes.root}>{expressions[expressionIdx]}<span>&nbsp;=&nbsp;</span>
                    <Input
                        className={classes.root}
                        value={answerValue}
                        margin="dense"
                        onChange={handleInputChange}
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

export default MulDivExpressions;
