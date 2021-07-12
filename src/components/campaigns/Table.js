import React, { useState } from "react";
import CampaignsModal from "./CampaignsModal";
import Calander from "./Calander";
import CalenderModal from './CalenderModel';

import FilePic from "../assets/Images/inspect/Front-End/Page 1/Dashboard-Popup/Group/Row/Group 3/file.png";
import GrowthReport from "../assets/Images/inspect/Front-End/Page 1/Dashboard-Popup/Group/Row/Group 2/statistics-report.png";
import Calendar from "../assets/Images/inspect/Front-End/Page 1/Dashboard-Popup/Group/Row/Group/calendar.png";
import PriceIcon from "../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 4/Price.png";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Table = (props) => {
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calender, setCalenderData] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalRegion, setModalRegion] = useState("");

  function dateDiffInDays(campaignDate, currentDate) {
    var start = campaignDate.setHours(0, 0, 0, 0); // setHours is used to ignore timestamp btw both dates
    var end = currentDate.setHours(0, 0, 0, 0);

    var datediff = (start - end) / (3600 * 24 * 1000); // exact dates

    let datestring = "";
    if (datediff > 0) {
      datestring = `${datediff} days ahead`;
    }
    if (datediff === 0) {
      datestring = `Today`;
    }
    if (datediff < 0) {
      datestring = `${datediff * -1} days ago`;
    }

    return datestring;
  }

  function campaignFormatter(cell, row) {
    return (
      <div className="formatter">
        <img className="colPic" src={row.image} alt="cam img"></img>
        <div className="colGame">{row.gameName}</div>

      </div>
    );
  }

  function dateFormatter(cell, row) {
    const month = row.date.toLocaleString("default", { month: "short" });
    const day = row.date.getDate();
    const year = row.date.getFullYear();
    return (
      <div className="dateFormatter">
        <div className="colDate">
          {month} {year}, {day}
        </div>
        <div className="colDiff">{dateDiffInDays(row.date, new Date())}</div>
      </div>
    );
  }
  function handleClick(rowData) {
    setModalTitle(rowData.gameName);
    setModalImage(rowData.image);
    setModalRegion(rowData.region);
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  function viewFormatter(cell, row) {
    // console.log("row in view formatter", row);
    return (
      <div className="formatter">
        <img className="pricePic" src={PriceIcon} alt="price"></img>
        <div className="viewPrice" onClick={() => handleClick(row)}>
          View Pricing
        </div>
        {show ? (
          <CampaignsModal
            show={show}
            modalData={{
              title: modalTitle,
              image: modalImage,
              region: modalRegion,
            }}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    );
  }

  function handleClickForCalander(rowData) {
    setCalenderData(rowData);
    setShowCalendar(true);
  }
  function handleCloseCalander() {
    setShowCalendar(false)
  }
  function actionFormatter(cell, row) {
    return (
      <div className="formatter">
        <div className="csvDiv">
          <img src={FilePic} className="actionPic" alt="actionPic"></img>
          <span>CSV</span>
        </div>
        <div className="reportDiv">
          <img src={GrowthReport} className="actionPic" alt="actionPic"></img>
          <span>Report</span>
        </div>
        <div className="calendarDiv">
          <img src={Calendar} className="actionPic" alt="actionPic" ></img>
          <div className="scheduleTime" onClick={() => handleClickForCalander(row)} >Schedule Again</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BootstrapTable data={props.data} version="4" bordered={false}>
        <TableHeaderColumn
          isKey
          dataField="date"
          width="150"
          dataFormat={dateFormatter}
        >
          Date
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="gameName"
          width="300"
          dataFormat={campaignFormatter}
        >
          Campaign
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="price"
          width="200"
          dataFormat={viewFormatter}
        >
          View
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="image"
          width="400"
          dataFormat={actionFormatter}
        >
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
      {showCalendar ? <CalenderModal rowData={calender} show={showCalendar} onDateChange={props.onDateChange} closeCalander={handleCloseCalander} /> : null}
    </div>
  );
};
export default Table;
