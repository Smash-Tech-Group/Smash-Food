import { Icons } from "./icons";

interface Props {
  icon: IconTypes;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  onClick?: (e?: any) => void;
}

export type IIcon = Props;

export type IconTypes = keyof typeof Icons;
