import React from "react";
import Table from "./Table";

const CampaignTab = (props) => {
  return (
    <div>
      <Table data={props.data} onDateChange={props.onDateChange} />
    </div>
  );
};
export default CampaignTab;
