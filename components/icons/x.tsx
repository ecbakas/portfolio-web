import React from "react";
import type { SVGProps } from "react";

export const xIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="m213.06 212.78l-63.42-99.66L212.44 44a6 6 0 1 0-8.88-8L143 102.62l-41.9-65.84A6 6 0 0 0 96 34H48a6 6 0 0 0-5.06 9.22l63.42 99.66L43.56 212a6 6 0 0 0 8.88 8L113 153.38l41.9 65.84A6 6 0 0 0 160 222h48a6 6 0 0 0 5.06-9.22M163.29 210L58.93 46h33.78l104.36 164Z"
      ></path>
    </svg>
  );
};
