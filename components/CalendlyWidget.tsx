// @ts-nocheck

import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyButton = () => {
  return (
    <div className="CalendlyButton">
      <PopupButton
        url="https://calendly.com/intro-with-teamblozum/30min?month=2023-10"
        rootElement={typeof window !== "undefined" ? document.getElementById("__next") : null}
        text="Book a meet"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 whitespace-nowrap"
      />
    </div>
  );
};

export default CalendlyButton;
