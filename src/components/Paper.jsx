import React from "react";
import PropTypes from "prop-types";

//props object berisi children
const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">
        {children}
        {/* javascript expression */}
      </div>
    </div>
  );
};

Paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
