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
      d="M16.59 16.281h2.854l1.141-4.565h-3.994V9.433c0-1.175 0-2.282 2.282-2.282h1.712V3.316c-.372-.049-1.777-.16-3.26-.16-3.099 0-5.3 1.891-5.3 5.364v3.196H8.602v4.565h3.423v9.702h4.566V16.28Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
