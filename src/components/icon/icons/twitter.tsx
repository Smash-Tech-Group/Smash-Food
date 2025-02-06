import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 29"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#00472B"
        d="M21.572 2.188h4.2l-9.176 10.488 10.796 14.27h-8.453l-6.62-8.656-7.576 8.656H.541l9.815-11.22L0 2.19h8.667l5.984 7.911 6.921-7.912Zm-1.473 22.245h2.327L7.403 4.569H4.905L20.1 24.433Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .875h27.392v27.392H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
