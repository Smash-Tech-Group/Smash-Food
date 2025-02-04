import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#3BC672"
        fillRule="evenodd"
        d="M10.149 3.337a7.577 7.577 0 0 0-7.578 7.577v1.087a8.664 8.664 0 0 0 8.664 8.664H12a9.428 9.428 0 0 0 9.429-9.428v-.767a1.286 1.286 0 1 1 2.571 0v.766a12 12 0 0 1-12 12h-.765A11.235 11.235 0 0 1 0 12.002v-1.087A10.149 10.149 0 0 1 10.149.766a9.257 9.257 0 0 1 9.257 9.264v.737a7.88 7.88 0 0 1-7.88 7.879h-.292A6.641 6.641 0 0 1 4.593 12v-.764a5.88 5.88 0 0 1 5.876-5.879c2.4 0 4.348 1.946 4.348 4.348v.437a3.908 3.908 0 0 1-3.909 3.908h-.439a1.286 1.286 0 1 1 0-2.571h.437a1.337 1.337 0 0 0 1.337-1.337v-.44c0-.98-.793-1.775-1.774-1.775a3.309 3.309 0 0 0-3.303 3.308v.765a4.071 4.071 0 0 0 4.071 4.072h.293a5.307 5.307 0 0 0 5.308-5.308v-.737a6.685 6.685 0 0 0-6.69-6.691Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
