import React, { useState } from "react";
import "./Progressbar.scss";

type checkboxProps = {
  name: string;
};

const Progressbar: React.FC<{ checkboxes: checkboxProps[] }> = ({
  checkboxes,
}) => {
  return (
    <>
      <div>
        <fieldset className="">
          {checkboxes.map((cb) => (
            <div className="checkboxContainer">
              <label htmlFor="">{cb.name}</label>
              <input type="checkbox" />
            </div>
          ))}
        </fieldset>
      </div>
      <div className="progressBarCase">
        {/* <div className="progressBarFill"></div> */}
      </div>
    </>
  );
};

export default Progressbar;
