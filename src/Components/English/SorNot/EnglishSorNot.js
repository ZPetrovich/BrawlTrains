import FunctionalButtons from "../../Common/FunctionalButtons";
import React from "react";
import {shuffle} from "../../Common/Utils";
import {STATEMENTS_WITH_S_ARRAY} from "./StatementsWithS";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const SCORE_FACTOR = 0.5;

export const DROPBOX_STYLE = makeStyles({
    root: {
        fontSize: "xx-large",
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

const EnglishSorNot = props => {
    const dropboxStyle = DROPBOX_STYLE();

    const [statements, setStatements] = React.useState(shuffle(STATEMENTS_WITH_S_ARRAY));

    const [statementIdx, setStatementIdx] = React.useState(0);

    const [answer, setAnswer] = React.useState('');

    const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);

    const [style, setStyle] = React.useState(dropboxStyle.root);

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const checkHandler = () => {
        console.log('given answer', answer);
        console.log('correct answer', statements[statementIdx].answer);

        const isCorrect = answer === statements[statementIdx].answer;
        const score = isCorrect ? 1 : 0;
        props.onCalculateResult(score * SCORE_FACTOR);

        setStyle(isCorrect ? dropboxStyle.correct : dropboxStyle.incorrect);

        setNextButtonDisabled(!isCorrect);
    }

    const nextButtonHandler = () => {
        console.log('Next please', statementIdx, statements.length);
        setStatementIdx(statementIdx === statements.length - 1 ? 0 : statementIdx + 1);

        setAnswer('');

        setNextButtonDisabled(true);
        setStyle(dropboxStyle.root);

        props.onNext();
    }

    function calcChoices(statement) {
        return [
            statement.substring(statement.indexOf('[') + 1, statement.indexOf('|')),
            statement.substring(statement.indexOf('|') + 1, statement.indexOf(']'))
        ];
    }

    return (
        <div className='englishStatement'>
            <div className='englishStatement__item'>
                {statements[statementIdx].text.substring(0, statements[statementIdx].text.indexOf('['))}
                <Select className={style}
                        value={answer}
                        onChange={handleChange}
                >
                    {
                        calcChoices(statements[statementIdx].text).map(element => (
                            <MenuItem key={element} value={element}>{element}</MenuItem>
                        ))
                    }
                </Select>
                {statements[statementIdx].text.substring(statements[statementIdx].text.indexOf(']') + 1)}
            </div>

            <FunctionalButtons
                onCancel={props.onBack}
                onCheck={checkHandler}
                onNext={nextButtonHandler}
                nextButtonDisabled={nextButtonDisabled}/>

        </div>
    )
}

export default EnglishSorNot;
