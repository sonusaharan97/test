import React from "react";

import CampaignTab from "./CampaignTab";

import { Data } from "../data/Data";

import "./index.css";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
const Campaigns = () => {
  const [campaignData, setCampaignData] = useState(Data);
  console.log("this campaignData", campaignData);
  //setHours is used to ignore timestamp btw both dates
  const liveData = campaignData.filter(
    (oneCompaign) =>
      oneCompaign.date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
  );
  const pastData = campaignData.filter(
    (oneCompaign) =>
      oneCompaign.date.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
  );
  const upcomingData = campaignData.filter(
    (oneCompaign) =>
      oneCompaign.date.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
  );
  function handleDateChange(updatedRow) {
    let newData = [...campaignData]; //make copy of old data
    newData[updatedRow.id] = updatedRow; // update row at the index of row id
    setCampaignData(newData);
  }
  return (
    <Container>
      <Row className="name">
        <Col>Manage Campaigns</Col>
      </Row>
      <Row className="tabs">
        <Col>
          <Tabs
            defaultActiveKey="upcoming"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="upcoming" title="Upcoming Campaigns">
              <CampaignTab
                data={upcomingData}
                onDateChange={handleDateChange}
              />
            </Tab>
            <Tab eventKey="live" title="Live Campaigns">
              <CampaignTab data={liveData} onDateChange={handleDateChange} />
            </Tab>
            <Tab eventKey="past" title="Past Campaigns">
              <CampaignTab data={pastData} onDateChange={handleDateChange} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default Campaigns;
