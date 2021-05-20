import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const YES_ASWERS = [
    {key: 'ido', value: 'I do'},
    {key: 'wedo', value: 'we do'},
    {key: 'wedoes', value: 'we does'},
    {key: 'theydo', value: 'they do'},
    {key: 'theydoes', value: 'they does'},
    {key: 'hedo', value: 'he do'},
    {key: 'hedoes', value: 'he does'},
    {key: 'shedo', value: 'she do'},
    {key: 'shedoes', value: 'she does'},
    {key: 'itdo', value: 'it do'},
    {key: 'itdoes', value: 'it does'},
]

function AnswerYes(props) {
    return (
        <span> Yes, <Select
            className={props.style}
            value={props.value}
            onChange={(event) => props.onClick(event.target.value)}
        >
            {YES_ASWERS.map(element => (
                <MenuItem key={element.key} value={element.key}>{element.value}</MenuItem>
            ))}
             </Select>
             .
        </span>
    );
}

export default AnswerYes;
