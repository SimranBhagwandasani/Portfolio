import React from 'react'
import 
{
    ContactContainer,
    ContactWrapper,
    ContactPictureWrapper,
    ContactPicture,
    ContactDescriptionWrapper,
    ContactDescriptionHeading,
    IconsWrapper,
    IconDesigner
} from "./ContactElements";
import 
{ 
    StyledH1White 
} from '../SkillsSection/SkillsElements';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Hire from '../../images/contact/hire.svg';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSection = () => {
    return (
        <ContactContainer id="contact">
            <Fade left>
                <StyledH1White>CONTACT ME</StyledH1White>
            </Fade>
            <ContactWrapper>
                <ContactPictureWrapper>
                    <ContactPicture src={Hire} alt="Hire Me Picture"/>
                </ContactPictureWrapper>
                <ContactDescriptionWrapper>
                    <Flip left>
                        <ContactDescriptionHeading>
                        Take a step further to think out of the box solutions with me!
                        </ContactDescriptionHeading>
                    </Flip>
                    <IconsWrapper>
                        {/* Gmail */}
                        <IconDesigner>
                            <a href="mailto:simirb98@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope size="60px" color="#6600CC" />
                            </a>
                        </IconDesigner>

                        {/* LinkedIn */}
                        <IconDesigner>
                            <a href="http://www.linkedin.com/in/simran-bhagwandasani/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size="60px" color="#6600CC"/>
                            </a>
                        </IconDesigner>

                        {/* Instagram */}
                        <IconDesigner>
                            <a href="http://www.instagram.com/simran_bhagwandasani98/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size="60px" color="#6600CC"/>
                            </a>
                        </IconDesigner>

                        {/* Twitter */}
                        <IconDesigner>
                            <a href="http://twitter.com/SBhagwandasani" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size="60px" color="#6600CC"/>
                            </a>
                        </IconDesigner>

                        {/* Facebook */}
                        <IconDesigner>
                            <a href="http://www.facebook.com/simran.bhagwandasani.52/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size="60px" color="#6600CC"/>
                            </a>
                        </IconDesigner>

                        {/* Github */}
                        <IconDesigner>
                            <a href="http://github.com/SimranBhagwandasani?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <FaGithub size="60px" color="#6600CC"/>
                            </a>
                        </IconDesigner>
                    </IconsWrapper>
                </ContactDescriptionWrapper>
            </ContactWrapper>
        </ContactContainer>
        
    )
}

export default ContactSection
