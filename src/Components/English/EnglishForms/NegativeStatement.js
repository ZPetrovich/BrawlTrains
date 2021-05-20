import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const NEGATIVE_ANSWERS = [
    {key: 'donot', value: 'do not'},
    {key: 'doesnot', value: 'does not'},
]

function NegativeStatement(props) {
    return (
        <div>
            <b>(-)</b> {props.text.substring(0, props.text.indexOf('['))}
            <Select className={props.style}
                    value={props.value}
                    onChange={(event) => props.onChange(event.target.value)}
            >
                {NEGATIVE_ANSWERS.map(element => (
                    <MenuItem key={element.key} value={element.key}>{element.value}</MenuItem>
                ))}
            </Select>
            {props.text.substring(props.text.indexOf(']') + 1)}
        </div>
    );
}

export default NegativeStatement;