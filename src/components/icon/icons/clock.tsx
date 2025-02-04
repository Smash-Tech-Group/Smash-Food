import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#FD9602"
      fillOpacity={0.6}
      d="M32 61.333C15.8 61.333 2.666 48.2 2.666 32S15.8 2.667 32 2.667 61.333 15.8 61.333 32 48.2 61.333 32 61.333Zm2.666-46.666h-5.333v18.437L40 43.771 43.77 40l-9.104-9.104v-16.23Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
