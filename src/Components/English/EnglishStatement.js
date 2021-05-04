import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './EnglishStatement.css'
import AnswerNo, {NO_ASWERS} from "./AnswerNo";
import AnswerYes, {YES_ASWERS} from "./AnswerYes";
import NegativeStatement, {NEGATIVE_ANSWERS} from "./NegativeStatement";
import QuestionStatement, {QUESTION_ANSWERS} from "./QuestionStatement";
import FunctionalButtons from "../Common/FunctionalButtons";
import {STATEMENTS_ARRAY} from "./Statements";
import {shuffle} from "../Common/Utils";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export const DROPBOX_STYLE = makeStyles({
    root: {
        fontSize: "x-large",
        color: "black",
        fontWeight: "normal"
    },
    correct: {
        fontSize: "xx-large",
        color: "green",
        fontWeight: "bold"
    },
    incorrect: {
        fontSize: "xx-large",
        color: "red",
        fontWeight: "bold"
    }
});

const EnglishStatement = (props) => {
    const dropboxStyle = DROPBOX_STYLE();

    const [statements, setStatements] = React.useState(shuffle(STATEMENTS_ARRAY));
    console.log('statements' , statements);

    const [statementIdx, setStatementIdx] = React.useState(0);

    const [negativeStatement, setNegativeStatement] = React.useState('');
    const [negativeStatementStyle, setNegativeStatementStyle] = React.useState(dropboxStyle.root);

    const [questionStatement, setQuestionStatement] = React.useState('');
    const [questionStatementStyle, setQuestionStatementStyle] = React.useState(dropboxStyle.root);

    const [answerStatementYes, setAnswerStatementYes] = React.useState('');
    const [answerStatementYesStyle, setAnswerStatementYesStyle] = React.useState(dropboxStyle.root);

    const [answerStatementNo, setAnswerStatementNo] = React.useState('');
    const [answerStatementNoStyle, setAnswerStatementNoStyle] = React.useState(dropboxStyle.root);

    const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);

    function checkAnswer(answerStatement, answerPatterns, givenAnswer) {
        const answerChecked = answerPatterns.find(element => element.key === givenAnswer);
        const answerCorrect = answerStatement.substring(answerStatement.indexOf('[') + 1, answerStatement.indexOf(']'))
        return answerChecked.value === answerCorrect;
    }

    function checkStatement(givenStatement, patterns, setStyle, statementAnswer) {
        let isStatementCorrect = false;
        if (statementAnswer !== '') {
            const statementCorrectAnswer = givenStatement.substring(givenStatement.indexOf('[') + 1, givenStatement.indexOf(']'))
            const givenAnswer = patterns.find(element => element.key === statementAnswer);

            isStatementCorrect = statementCorrectAnswer === givenAnswer.value;
            setStyle(isStatementCorrect ? dropboxStyle.correct : dropboxStyle.incorrect);
        }

        return isStatementCorrect;
    }

    function checkHandler() {
        const negative = statements[statementIdx].negative;
        const isNegativeStatementCorrect = checkStatement(negative, NEGATIVE_ANSWERS, setNegativeStatementStyle, negativeStatement);
        console.log('is [negativeStatement] correct?', isNegativeStatementCorrect);

        const question = statements[statementIdx].question;
        const isQuestionStatementCorrect = checkStatement(question, QUESTION_ANSWERS, setQuestionStatementStyle, questionStatement);
        console.log('is [questionStatement] correct?', isQuestionStatementCorrect);

        let isYesAnswerCorrect = false;
        if (answerStatementYes !== '') {
            isYesAnswerCorrect = checkAnswer(statements[statementIdx].answerYes, YES_ASWERS, answerStatementYes);
            setAnswerStatementYesStyle(isYesAnswerCorrect ? dropboxStyle.correct : dropboxStyle.incorrect);
            console.log('is [yesAnswer] correct?', isYesAnswerCorrect);
        }

        let isNoAnswerCorrect = false;
        if (answerStatementNo !== '') {
            isNoAnswerCorrect = checkAnswer(statements[statementIdx].answerNo, NO_ASWERS, answerStatementNo);
            setAnswerStatementNoStyle(isNoAnswerCorrect ? dropboxStyle.correct : dropboxStyle.incorrect);
            console.log('is [noAnswer] correct?', isNoAnswerCorrect);
        }

        const isCorrect = isNegativeStatementCorrect && isQuestionStatementCorrect && isYesAnswerCorrect && isNoAnswerCorrect;
        setNextButtonDisabled(!isCorrect);
        console.log('answered', isCorrect);

        let score = 0;
        if (isNegativeStatementCorrect) {
            score++;
        }

        if (isQuestionStatementCorrect) {
            score++;
        }

        if (isYesAnswerCorrect && isNoAnswerCorrect) {
            score++;
        }

        props.onCalculateResult(score);
    }

    function handleNegativeStatementChange(value) {
        setNegativeStatement(value);
    }

    function handleQuestionChange(value) {
        setQuestionStatement(value);
    }

    function handleAnswerChangeYes(value) {
        setAnswerStatementYes(value);
    }

    function handleAnswerChangeNo(value) {
        setAnswerStatementNo(value);
    }

    // TODO seems no need to invoke ?
    function onTryAgainHandler() {
        setStatements(prevStatements => shuffle(prevStatements));
    }

    function nextButtonHandler() {
        console.log('Next please', statementIdx, statements.length);
        setStatementIdx(statementIdx === statements.length - 1 ? 0 : statementIdx + 1);

        setNextButtonDisabled(true);
        props.onNext();

        setNegativeStatement('');
        setQuestionStatement('');
        setAnswerStatementYes('');
        setAnswerStatementNo('');

        setNegativeStatementStyle(dropboxStyle.root);
        setQuestionStatementStyle(dropboxStyle.root);
        setAnswerStatementYesStyle(dropboxStyle.root);
        setAnswerStatementNoStyle(dropboxStyle.root);
    }

    return (
        <div className='englishStatement'>
            <div className='englishStatement__item'>
                <div>(+) {statements[statementIdx].positive} </div>

                {/*<div>(-) I [do not] like cats.</div>*/}
                <NegativeStatement
                    style={negativeStatementStyle}
                    text={statements[statementIdx].negative}
                    value={negativeStatement}
                    onChange={handleNegativeStatementChange}
                />

                {/*<div>(?) [Do] you like cats?</div>*/}
                <QuestionStatement
                    style={questionStatementStyle}
                    value={questionStatement}
                    text={statements[statementIdx].question}
                    onChange={handleQuestionChange}/>

                {/*<div>(o) Yes, [I do]. No, [I do not].</div>*/}
                <div>
                    (o) <AnswerYes
                    style={answerStatementYesStyle}
                    value={answerStatementYes}
                    onClick={handleAnswerChangeYes}/>
                    <AnswerNo
                        style={answerStatementNoStyle}
                        value={answerStatementNo}
                        onClick={handleAnswerChangeNo}/>
                </div>
            </div>

            <FunctionalButtons
                onCancel={props.onBack}
                onCheck={checkHandler}
                onNext={nextButtonHandler}
                nextButtonDisabled={nextButtonDisabled}/>
        </div>
    )
}

export default EnglishStatement;