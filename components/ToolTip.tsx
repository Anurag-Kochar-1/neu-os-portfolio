"use client"

import React, { ReactNode } from "react";
import { FC } from "react";
import { useState } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-4 py-2 text-xl font-medium text-gray-900 bg-white rounded shadow-lg border-2 border-black">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
