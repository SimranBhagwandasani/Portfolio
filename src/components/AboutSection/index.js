import React,{useState} from 'react';
import Profile from './profile.webp';
import 
{ AboutContainer, 
  AboutWrapper,
  StyledH1Black, 
  ProfileWrapper,
  ProfilePicture,
  DescriptionWrapper,
  Description,
  AboutBtnWrapper,
  AboutBtnLink,
  ArrowForward,
  ArrowRight
  } from "./AboutElements";
import {Button} from "../ButtonElements";
import Fade from 'react-reveal/Fade';

const AboutSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover);
    }
    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1QHcH8fdNffKw_bFNsrk86iDvUE6h7gv8/view"
    }
    return (
        <AboutContainer id="about">
            <Fade left>
                <StyledH1Black>ABOUT ME</StyledH1Black>
            </Fade>
            <AboutWrapper>
                <ProfileWrapper>
                    <ProfilePicture src={Profile} alt="Profile"/>
                </ProfileWrapper>
                <DescriptionWrapper>
                    <Description>
                        
                        <br/>
                        <br/>I am a passionate programmer and developer, born and brought up in Mumbai, India. 
                        <br/>
                        <br/>In 2020, I successfully graduated as a Computer Engineer from Vivekanand Education Society's Institute of Technology, affiliated to Mumbai University with an aggregate CGPA of 9.67 on 10.
                        <br/>
                        <br/>I love to build attractive Mobile and Web Applications with new features and my goal is to write simple and efficient programs with accurate solutions.
                    </Description>
                    <AboutBtnWrapper>
                        <AboutBtnLink>
                            <Button
                                onClick={downloadFile}
                                primary="true" 
                                dark="true" 
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}>
                                DIVE DEEP {hover ? <ArrowForward /> : <ArrowRight/> }
                            </Button>
                        </AboutBtnLink>
                </AboutBtnWrapper>
                </DescriptionWrapper>
                
            </AboutWrapper>
        </AboutContainer>
        
        
    )
}

export default AboutSection
