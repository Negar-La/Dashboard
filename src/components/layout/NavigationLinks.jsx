import React from "react";
import { HomeIcon, AnnotationIcon, ChartBarIcon } from "@heroicons/react/solid";
import { NavLink, useLocation } from "react-router-dom";

function NavigationLinks({ isExpanded }) {
  let currentLocation = useLocation();

  return (
    <nav
      className={`ml-6 md:m-auto ${
        isExpanded ? "flex-col" : "hidden md:flex md:justify-around"
      } md:flex-col`}
    >
      <NavLink
        to="/"
        aria-label="navigates to home dashboard"
        className="flex items-center"
      >
        <HomeIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
          alt="home dashboard"
        />
        {isExpanded && <span className="ml-2 font-bold">Home</span>}
      </NavLink>
      <NavLink
        to="/reviews"
        aria-label="navigates to reviews dashboard"
        className="flex items-center"
      >
        <AnnotationIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/reviews"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
        />
        {isExpanded && <span className="ml-2 font-bold">Reviews</span>}
      </NavLink>
      <NavLink
        to="/sales"
        activeClassName="text-fuchsia-800"
        aria-label="navigates to sales dashboard"
        className="flex items-center"
      >
        <ChartBarIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/sales"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
        />
        {isExpanded && <span className="ml-2 font-bold">Sales</span>}
      </NavLink>
    </nav>
  );
}

export default NavigationLinks;
