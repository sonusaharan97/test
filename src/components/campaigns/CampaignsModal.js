import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import pubG from '../assets/Images/inspect/Front-End/Page 1/Dashboard-Popup/Popup/Bitmap.png';

const CampaignsModal = (props) => {

    console.log("model trigger", props)
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><div className="modalTittle">
                        <img className="gamePic" src={props.modalData.image} alt="pubG"></img>
                        <div className="gameName">
                            {props.modalData.title}
                        </div>
                        <div className="colRegion">
                            {props.modalData.region}
                        </div>

                    </div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Pricing">Pricing</div>
                    <div className="weeks">
                        <div className="period">
                            1 Week - 1 Month
                        </div>
                        <div className="price">
                            $100
                        </div>
                    </div>
                    <div className="weeks">
                        <div className="period">
                            6 Months
                        </div>
                        <div className="price">
                            $100
                        </div>
                    </div>
                    <div className="weeks">
                        <div className="period">
                            1 Year
                        </div>
                        <div className="price">
                            $100
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="closeButton" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
export default CampaignsModal;
