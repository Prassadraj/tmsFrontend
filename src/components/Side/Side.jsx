import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Side() {
  const location = useLocation();

  return (
    <div className="relative top-0">
      <nav className="w-[17vw] h-full bg-bgBlack border-r-bgGray border-b-bgGray border-t-bgGray border-r-[1px] border-t-[1px] border-b-[1px] ">
        <div className="text-name mt-14 font-poppins flex flex-col justify-center items-center gap-6">
          <Link to="/dashboard">
            <div
              className={`flex w-[15vw] rounded-lg p-3 items-center justify-center ${
                location.pathname === "/dashboard" ? "bg-bgGray" : ""
              }`}
            >
              <div className="flex justify-center items-center mr-7">
                <FontAwesomeIcon icon={faHouse} className="text-xl" />
              </div>
              <div className="text-lg">Dashboard</div>
            </div>
          </Link>
          <Link to="/ticket">
            <div
              className={`flex w-[15vw] p-3 items-center justify-center rounded-lg ${
                location.pathname === "/ticket" ? "bg-bgGray" : ""
              }`}
            >
              <div className="flex justify-center items-center mr-7">
                <FontAwesomeIcon icon={faListCheck} className="text-xl" />
              </div>
              <div className="text-lg">New Tickets</div>
            </div>
          </Link>
          <Link to="/analytics">
            <div
              className={`flex w-[15vw] p-3 items-center justify-center rounded-lg ${
                location.pathname === "/analytics" ? "bg-bgGray" : ""
              }`}
            >
              <div className="flex justify-center items-center mr-8">
                <FontAwesomeIcon icon={faChartSimple} className="text-xl" />
              </div>
              <div className="text-lg">Analytics</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Side;
