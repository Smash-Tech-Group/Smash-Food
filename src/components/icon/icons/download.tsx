import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 20"
    {...props}
  >
    <path
      stroke="#00472B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 19h12M7 1v14m0 0 5-5m-5 5-5-5"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
