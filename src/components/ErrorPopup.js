import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function DangerAlert({ message }) {
  return (
    <div className="danger-alert">
      <FontAwesomeIcon icon={faExclamationTriangle} className="alert-icon" />
      <span>{message}</span>
    </div>
  );
}

export default DangerAlert;
