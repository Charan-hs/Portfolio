import { FaGithub, FaLink } from "react-icons/fa";
import React from "react";

import { ButtonIconEl } from "./ButIconElements";

const ButtonIcon = ({ children, icon,href,target }) => {
  return (
    <ButtonIconEl primary={false} dark={false} href={href} target={target}>
      {icon === "s" ? <FaGithub size={15} style={{marginRight:"8px"}}/> : null}
      {icon === "l" ? <FaLink size={15} style={{marginRight:"8px"}} /> : null}
      {children}
    </ButtonIconEl>
  );
};

export default ButtonIcon;
