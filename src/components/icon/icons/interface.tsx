import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 23"
    {...props}
  >
    <path
      fill="#F95"
      d="M9.59 1.493a1 1 0 0 1 1.82 0l8.944 19.592a1 1 0 0 1-.91 1.415H1.556a1 1 0 0 1-.91-1.415L9.59 1.493Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
