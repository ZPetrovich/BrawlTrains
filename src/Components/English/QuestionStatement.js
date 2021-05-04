import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import './EnglishStatement.css'

export const QUESTION_ANSWERS = [
    {key: 'do', value: 'Do'},
    {key: 'does', value: 'Does'},
]

function QuestionStatement(props) {
    return (
        <div>(?) &nbsp;
            <Select className={props.style}
                    value={props.value}
                    onChange={(event) => props.onChange(event.target.value)}
            >
                {QUESTION_ANSWERS.map(element => (
                    <MenuItem key={element.key} value={element.key}>{element.value}</MenuItem>
                ))}
            </Select>
            {props.text.substring(props.text.indexOf(']') + 1)}
        </div>
    )
}

export default QuestionStatement;
