import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calander(props) {
    console.log("props", props)
    // set states of calendar date
    const [calDate, setCalDate] = useState(props.rowData.date)
    function onChange(calDate) {
        // change results based on calendar date click
        console.log("getting logged ", calDate);
        setCalDate(calDate)
        props.rowData['date'] = calDate
        props.closeCalander();
        props.onDateChange(props.rowData);

    }
    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    )

}