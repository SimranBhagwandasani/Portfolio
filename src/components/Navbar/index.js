import React, {useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import 
{ Nav,
  NavbarContainer, 
  NavLogo, 
  NavIcon,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks
} from "./NavbarElements";
import {animateScroll as SmoothScroll} from 'react-scroll';
import Logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
    const [scrollNav,setScrollNav] = useState(false);
    const changeNav = ()=> {
        if(window.scrollY >= 80){
          setScrollNav(true)
        }
        else{
          setScrollNav(false)
        }
      }
    
        useEffect(() => {
          window.addEventListener('scroll',changeNav)
        }, [])
    
        const toggleHome = () =>{
          SmoothScroll.scrollToTop();
        }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavIcon src={Logo}></NavIcon>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >Experience
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="achievements"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >Achievements
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth="true"
                                duration={500} 
                                spy={true}
                                exact= 'true'
                                offset={-80}
                            >Contact Me
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
