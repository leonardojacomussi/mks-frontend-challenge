import { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const CloseCart: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
      {/* <circle cx="16" cy="16" r="16" fill="black"/> */}
      <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white"/>
    </SvgIcon>
  );
};

export default CloseCart;