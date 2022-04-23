import React from 'react'
import { DatePicker } from "@mui/lab";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePickerContaint(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
            <DatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}

            />
    )
}
