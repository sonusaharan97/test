import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Calander from "./Calander";

const CalenderModal = (props) => {

    console.log("model trigger", props)
    return (
        <div>
            <Modal show={props.show} onHide={props.closeCalander}>
                <Modal.Header closeButton>
                    <Modal.Title><div className="calendarModalTitle">
                        Select Date to Reschedule
                    </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calander rowData={props.rowData} onDateChange={props.onDateChange} closeCalander={props.closeCalander} />
                </Modal.Body>
                <Modal.Footer>
                    <div className="text">* The campaign will move to the relevant tab based on the date selected.</div>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
export default CalenderModal;
