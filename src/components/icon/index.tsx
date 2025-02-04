import React from "react";

import { Icons } from "./icons";
import { IIcon } from "./icon";

export const Icon: React.FC<IIcon> = ({
  icon,
  size,
  width,
  height,
  onClick,
  className,
  ...rest
}) => {
  const IconComponent = Icons[icon] || null;

  return (
    <div {...rest} onClick={onClick}>
      {IconComponent ? (
        <IconComponent
          width={size || width}
          height={size || height}
          onClick={onClick}
          className={className}
        />
      ) : null}
    </div>
  );
};
