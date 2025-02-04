import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 276 208"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={8}
      d="M4 6.855c16.364-3.821 25.5-5.348 40.5 5.5 21 17.15 2.5 57.487-10.5 62.5-9.025 3.48-14.182-1.847-15.5-8-5-23.35 71-50.355 101-39.855 29.02 10.157 37.178 41.06 35.231 106.284-.034 1.149 1.615 1.452 2 .369C175.266 81.511 191.465 52.61 227 14.855"
    />
    <path
      stroke="#00472B"
      strokeLinecap="round"
      strokeWidth={8}
      d="M191 17c-13 10-16.64 13.255-22 32"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={8}
      d="M224 110c-16 2-22 5-28.998 17.28"
    />
    <path
      stroke="#00472B"
      strokeLinecap="round"
      strokeWidth={8}
      d="M271.015 169.002c-21.015-18.502-58.512-12.004-83-7.167"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
