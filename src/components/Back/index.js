import React from "react";
import cm from "./back.module.css";
import { Link } from "react-router-dom";

const Back = ({ to }) => {
  return (
    <Link {...{ to }}>
      <div className={cm.back}>{"<"}</div>
    </Link>
  );
};

export default Back;
