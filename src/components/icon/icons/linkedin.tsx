import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 29 29"
    {...props}
  >
    <path
      fill="#00472B"
      d="M25.305.875a3.044 3.044 0 0 1 3.044 3.044v21.304a3.044 3.044 0 0 1-3.044 3.044H4.001a3.043 3.043 0 0 1-3.044-3.044V3.92A3.044 3.044 0 0 1 4.001.875h21.304Zm-.76 23.587v-8.065a4.961 4.961 0 0 0-4.962-4.961c-1.293 0-2.8.791-3.53 1.978v-1.689h-4.246v12.737h4.246V16.96c0-1.172.943-2.13 2.115-2.13a2.13 2.13 0 0 1 2.13 2.13v7.502h4.246ZM6.86 9.336a2.557 2.557 0 0 0 2.557-2.557 2.565 2.565 0 0 0-2.557-2.571A2.572 2.572 0 0 0 4.29 6.779 2.565 2.565 0 0 0 6.86 9.336Zm2.116 15.126V11.725H4.76v12.737h4.216Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
