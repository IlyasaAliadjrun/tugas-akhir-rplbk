import React from "react";

function Card({cTextTitle, cTextBody, cImage}) {
  return (
      <div className="col">
        <div className="card">
          <img src={cImage}className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{cTextTitle}</h5>
            <p className="card-text">
              {cTextBody}
            </p>
          </div>
        </div>
     </div>
  );
}

export default Card;
