import React, { type ReactElement } from "react";

export default function Hamburger({
  width = "21",
  height = "21",
  onClick,
}: {
  width?: string;
  height?: string;
  onClick: () => void;
}): ReactElement {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M2.625 14.875H18.375M2.625 10.5H18.375M2.625 6.125H18.375"
        stroke="#E8DFD2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
