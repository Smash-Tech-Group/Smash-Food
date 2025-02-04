import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#FFD500"
      d="M9.042 1.194c.285-.95 1.63-.95 1.916 0L12.48 6.27a1 1 0 0 0 .958.713h5.087c.95 0 1.365 1.198.619 1.786l-4.25 3.344a1 1 0 0 0-.34 1.074l1.591 5.301c.28.936-.809 1.678-1.576 1.073l-3.95-3.109a1 1 0 0 0-1.237 0l-3.95 3.11c-.768.604-1.858-.138-1.577-1.074l1.59-5.301a1 1 0 0 0-.34-1.074L.857 8.77c-.746-.588-.33-1.786.619-1.786h5.087a1 1 0 0 0 .958-.713l1.522-5.076Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
