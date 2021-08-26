import React, {useState} from 'react';
//import Video from '../../videos/video.mp4';
import {Button} from "../ButtonElements";
import Swing from 'react-reveal/Swing';
import Particles from 'react-particles-js';
//import background from "./background.webp";
import {ParticlesOption} from '../../ParticlesOption';

import 
{ HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";
import Typewriter from 'typewriter-effect';
 

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover);
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <Particles className="particles particles-box" params={ParticlesOption}/>
            </HeroBg>
            
            <HeroContent>
                <Swing>
                    <HeroH1>Hello, I am Simran Bhagwandasani</HeroH1>
                </Swing>
                <HeroP>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Inquisitive Software Programmer','Mobile App Developer','Fitness Enthusiast'],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="about"
                        primary="true" 
                        dark="true" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        GET STARTED {hover ? <ArrowForward /> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
