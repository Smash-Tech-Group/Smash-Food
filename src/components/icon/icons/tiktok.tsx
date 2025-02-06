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
    <path
      fill="#00472B"
      d="M19.25 7.515a4.885 4.885 0 0 1-1.21-3.218h-3.526v14.152a2.956 2.956 0 0 1-2.956 2.853 2.976 2.976 0 0 1-2.967-2.967c0-1.963 1.894-3.435 3.846-2.83v-3.607c-3.937-.525-7.384 2.534-7.384 6.437 0 3.8 3.15 6.505 6.494 6.505 3.583 0 6.494-2.91 6.494-6.505v-7.179a8.389 8.389 0 0 0 4.908 1.575V9.205s-2.146.102-3.698-1.69Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
