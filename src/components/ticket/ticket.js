import React from "react";
import "./style.scss";
const Tickets = (props) => {
  const { data } = props;
  if (data) {
    const statusClassName = data.Status;
    const ticketName =
      data.Goal.split(" ").length >= 2
        ? `${data.Goal.split(" ")[0][0]}${data.Goal.split(" ")[1][0]}`
        : `${data.Goal.split(" ")[0][0]}${data.Goal.split(" ")[0][1]}`;
    const selectedClassName =
      data.Status === "selected" ? "ticket selected" : "ticket";
    return (
      <div className={selectedClassName}>
        <div>{ticketName.toUpperCase()}</div>
        <div className={statusClassName} />
      </div>
    );
  }
  return null;
};

export default Tickets;
