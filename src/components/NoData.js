import React from "react";
import Nodata from "../assets/no-data.png";
import { Link } from "react-router-dom";

function NoData() {
  return (
    <div className="bg-white max-w-[900px] w-full mx-auto my-0 rounded-[6px] shadow-xl p-[60px] md:p-[42px] box-border">
      <img
        src={Nodata}
        alt="no data"
        className="max-w-[232px] w-full h-auto mx-auto my-0 pb-[33px]"
      />
      <div className="grid gap-[33px] text-center">
        <p className="text-[#919CB0] text-[18px] md:text-[16px] font-medium max-w-[353px] text-center mx-auto my-0">
          No results. Please try different search. Or return to hompage.
        </p>
        <Link
          to="/"
          className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center mx-auto my-0 rounded-full bg-orange-400 w-fit og-btn transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

export default NoData;
