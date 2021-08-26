import React, { useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import 
{
    AchievementsContainer,
    AchievementsWrapper,
    AchievementsCard,
    StyledHeadingWhite,
    ImageWrapper,
    AchievementsPicture,
    PublicationPicture,
    HackathonTextWrapper,
    PublicationTextWrapper,
    SecondYearTextWrapper,
    ThirdYearTextWrapper
    
} from "./AchievementsElements";

import 
{
    StyledH1Black
} from "../AboutSection/AboutElements";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SIH from "../../images/achievements/sih2019.svg";
import Publication from "../../images/achievements/publication.svg";
import FirstRank from "../../images/achievements/first_rank.svg";
import SecondRank from "../../images/achievements/second_rank.svg";

//import ThirdYear from "../../images/achievements/third_year.svg";

const AchievementsSection = () => {
    const ref = useRef();
    return (
        <AchievementsContainer id="achievements">
            <Fade left>
                <StyledH1Black>ACHIEVEMENTS</StyledH1Black>
            </Fade>
            <AchievementsWrapper>

                {/* SIH 2019 */}
                <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"  
                    ref={ref}>
                    <FrontSide style={{padding: 0, boxShadow: 'none'}}>
                        <AchievementsCard>
                            <Zoom left>
                                <StyledHeadingWhite>Smart Indian Hackathon 2019</StyledHeadingWhite>
                            </Zoom>
                            <ImageWrapper>
                                <AchievementsPicture src={SIH}></AchievementsPicture>
                            </ImageWrapper>
                        </AchievementsCard>
                    </FrontSide>
                    <BackSide 
                        style={{ 
                            backgroundColor: '#6600CC', 
                            padding: 0, 
                            boxShadow: 'none',
                            color: "#fff",
                            borderRadius: '10px'}}>
                        <HackathonTextWrapper>
                            Winner of Smart India Hackathon, 2019 Software Edition. Our team developed the solution for a particular use case for the Ministry of Civil Aviation under the UDAAN Scheme initiated by the Government of India. The problem was classified under the "Complex Category" and we were awarded with a prize money of Rs. 1,00,000.
                        </HackathonTextWrapper>
                    </BackSide>
                </Flippy>
                

                {/* Publication */}
                <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"  
                    ref={ref}>
                    <FrontSide style={{padding: 0, boxShadow: 'none'}}>
                        <AchievementsCard>
                            <Zoom left>
                                <StyledHeadingWhite>Research Paper Presentation</StyledHeadingWhite>
                            </Zoom>
                            <ImageWrapper>
                                <PublicationPicture src={Publication}></PublicationPicture>
                            </ImageWrapper>
                        </AchievementsCard>
                    </FrontSide>
                    <BackSide 
                        style={{ 
                            backgroundColor: '#6600CC', 
                            padding: 0, 
                            boxShadow: 'none',
                            color: "#fff",
                            borderRadius: '10px'}}>
                        <PublicationTextWrapper>
                            Author of 
                            <br/>
                            <strong style={{color: "#000"}}>Harvest Treasure: Prediction of Best Crop Yield,</strong>
                            <br/>a <strong style={{color: "#000"}}>Springer</strong> publication published in <strong style={{color: "#000"}}>Intelligent Computing and Networking</strong>, written for predicting the optimal crop yield based on various weather and soil parameters acquired using several weather API's and datasets.
                            <br/>A paper presentation for the same was done in the International Conference on Intelligent Computing and Networking (IC-ICN-2020).
                        </PublicationTextWrapper>
                    </BackSide>
                </Flippy>
                {/* Second Year */}
                <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"  
                    ref={ref}>
                    <FrontSide style={{padding: 0, boxShadow: 'none'}}>
                        <AchievementsCard>
                            <Zoom left>
                                <StyledHeadingWhite>Sophomore Year First Rank Holder</StyledHeadingWhite>
                            </Zoom>
                            <ImageWrapper>
                                <AchievementsPicture src={FirstRank}></AchievementsPicture>        
                            </ImageWrapper>
                        </AchievementsCard>
                    </FrontSide>
                    <BackSide 
                        style={{ 
                            backgroundColor: '#6600CC', 
                            padding: 0,
                            boxShadow: 'none',
                            color: "#fff",
                            borderRadius: '10px'}}>
                        <SecondYearTextWrapper>
                            Secured First Rank in the Computer Engineering Department in the Second Year.
                            <br/><br/>
                            <strong style={{color: "#000"}}>CGPA : 10/10 </strong>
                            <br/>
                            <br/>
                            <strong>Core Subjects</strong> 
                            <br/> 
                            <hr/>
                            <br/>
                            Data Structures 
                            <br/>Analysis of Algorithms
                            <br/>Operating System
                            <br/>Object Oriented Programming
                            <br/>Computer Organization and Architecture
                            <br/>Python Programming
                        </SecondYearTextWrapper>
                    </BackSide>
                </Flippy>

                {/* Third Year */}
                <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"  
                    ref={ref}>
                    <FrontSide style={{padding: 0, boxShadow: 'none'}}>
                        <AchievementsCard>
                            <Zoom left>
                                <StyledHeadingWhite>Junior Year Second Rank Holder</StyledHeadingWhite>
                            </Zoom>
                            <ImageWrapper>
                                <AchievementsPicture src={SecondRank}></AchievementsPicture>        
                            </ImageWrapper>
                        </AchievementsCard>
                    </FrontSide>
                    <BackSide 
                        style={{ 
                            backgroundColor: '#6600CC', 
                            padding: 0, 
                            boxShadow: 'none',
                            color: "#fff",
                            borderRadius: '10px'}}>
                        <ThirdYearTextWrapper>
                            Secured Second Rank in the Computer Engineering Department in the Third Year.
                            <br/><br/>
                            <strong style={{color: "#000"}}>CGPA : 9.77/10 </strong>
                            <br/>
                            <br/>
                            <strong>Core Subjects</strong> 
                            <br/> 
                            <hr/>
                            <br/>
                            Database Management System
                            <br/>Computer Networks
                            <br/>Theory of Computer Science
                            <br/>Web Designing
                            <br/>Software Engineering
                            <br/>Data Warehouse and Mining
                            <br/>System Programming and Compiler Construction
                            <br/>Cryptography and System Security
                        </ThirdYearTextWrapper>
                    </BackSide>
                </Flippy>
            </AchievementsWrapper>
        </AchievementsContainer>
    )
}

export default AchievementsSection
