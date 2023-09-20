import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";

function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex md:flex-col md:w-auto md:flex ${
        isExpanded ? "justify-around" : "justify-start"
      } px-3 w-screen fixed bottom-0  md:fixed md:top-0 py-6 md:shadow-2xl`}
    >
      <Logo />
      <NavigationLinks isExpanded={isExpanded} />
      <button aria-label="Expand sidebar" onClick={toggleExpand}>
        <ArrowCircleRightIcon
          className={`md:w-12 md:h-12 md:text-gray-500 nav-link ${
            isExpanded ? "hidden" : "block"
          }`}
        />
      </button>
      {isExpanded && (
        <button onClick={() => toggleExpand(false)} className="ml-5">
          <ArrowCircleLeftIcon
            className={`md:w-12 md:h-12 md:text-gray-500 nav-link ${
              isExpanded ? "block" : "hidden"
            }`}
          />
        </button>
      )}
    </div>
  );
}

export default SideBar;
