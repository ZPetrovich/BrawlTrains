import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const NO_ASWERS = [
    {key: 'idonot', value: 'I do not'},
    {key: 'wedonot', value: 'we do not'},
    {key: 'wedoesnot', value: 'we does not'},
    {key: 'theydonot', value: 'they do not'},
    {key: 'theydoesnot', value: 'they does not'},
    {key: 'hedonot', value: 'he do not'},
    {key: 'hedoesnot', value: 'he does not'},
    {key: 'shedonot', value: 'she do not'},
    {key: 'shedoesnot', value: 'she does not'},
    {key: 'itdonot', value: 'it do not'},
    {key: 'itdoesnot', value: 'it does not'},
];

function AnswerNo(props) {
    return (
        <span>
            No, <Select
            className={props.style}
            value={props.value}
            onChange={(event) => props.onClick(event.target.value)}
        >
            {NO_ASWERS.map(element => (
                <MenuItem key={element.key} value={element.key}>{element.value}</MenuItem>
            ))}
               </Select>.
        </span>
    );
}

export default AnswerNo;
