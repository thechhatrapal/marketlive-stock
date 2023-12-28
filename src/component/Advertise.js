import React from "react";
import advertise from "../assets/advertise.gif";
import addimg from "../assets/add-img.jpg";

function Advertise() {
  return (
    <>
      <div className="col-12 col-lg-3">
        <img src={advertise} alt="" className="mt-4 add-img w-100" />
        <img src={addimg} alt="" className="mt-4 add-img w-100" />
      </div>
    </>
  );
}

export default Advertise;
