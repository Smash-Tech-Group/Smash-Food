import React from "react";
import { iAvatar } from "./avatar";

export const Avatar: React.FC<iAvatar> = ({ name, onClick }) => {
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
