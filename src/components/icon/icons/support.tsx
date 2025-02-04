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
    <path
      fill="#0BA1A1"
      d="m4.96 3.545 4.655 4.654a4.49 4.49 0 0 1 4.773 0l4.652-4.652a11 11 0 0 0-14.078 0m15.492 1.412L15.8 9.614a4.49 4.49 0 0 1 0 4.772l4.653 4.653a11 11 0 0 0 0-14.078M19.04 20.453l-4.653-4.654a4.49 4.49 0 0 1-4.773 0L4.96 20.454a11 11 0 0 0 14.079 0M3.547 19.039 8.2 14.384a4.49 4.49 0 0 1 0-4.772L3.547 4.959a11 11 0 0 0 0 14.078"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
