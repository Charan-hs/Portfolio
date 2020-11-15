import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";
function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="abilities" onClick={toggle}>
              Abilities
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
              Projects
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute
              href={require("../../CHARAN.pdf").default}
              target="_blank"
            >
              Resume
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
