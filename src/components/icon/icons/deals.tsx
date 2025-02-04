import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 10"
    {...props}
  >
    <circle cx={5} cy={5} r={5} fill="#fff" />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
