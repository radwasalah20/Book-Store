import React from "react";
import "./TitleTypeOne.css"

function TitleTypeOne({ ClassName, Title, TitleTop }) {
  return (
    <div className={`titleTypeOne ${ClassName} d-flex flex-column justify-content-center align-items-center gap-3 my-5`}>
      <small className="small-title">{TitleTop}</small>
      <div className="heading-H">
        <h2>{Title}</h2>
      </div>
    </div>
  );
}

export default TitleTypeOne;
