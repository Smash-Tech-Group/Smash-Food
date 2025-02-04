import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 47 9"
    {...props}
  >
    <path
      stroke="#00472B"
      strokeWidth={2}
      d="M.715 1.5c18.37 8.161 28.113 7.584 45 0"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
