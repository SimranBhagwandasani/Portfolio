import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="achievements" onClick={toggle}>Achievements</SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact Me</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;