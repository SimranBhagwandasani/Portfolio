import React from 'react'
import
{
    SkillsContainer,
    StyledH1White,
    SkillsWrapper,
    SkillsCard,
    StyledHeading,
    SkillsCardContentWrapper,
    SkillsIcon,
    SkillName,
    Column1Wrapper,
    Column2Wrapper,
    Column3Wrapper
    
} from "./SkillsElements";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

//Front-End
import HTML5 from "../../images/skills/html-5.svg";
import CSS3 from "../../images/skills/css3.svg";
import JAVASCRIPT from "../../images/skills/javascript.svg";
import BOOTSTRAP from "../../images/skills/bootstrap-4.svg";
import REACT from "../../images/skills/react.svg";
import ANDROID from "../../images/skills/android.svg";
import REDUX from "../../images/skills/redux.svg";
import REACT_ROUTER from "../../images/skills/react-router.svg";
import MATERIALUI from "../../images/skills/material-ui-1.svg";
import REACT_BOOTSTRAP from "../../images/skills/react-bootstrap.svg";
import STYLED_COMPONENTS from "../../images/skills/styled-components.svg";

//Back-End
import NODE_JS from "../../images/skills/nodejs.svg";
import EXPRESS from "../../images/skills/express.svg";
import DJANGO from "../../images/skills/django.svg";
import FLASK from "../../images/skills/flask.svg";

//Hosting platforms
import HEROKU from "../../images/skills/heroku.svg";
import GITHUB_PAGES from "../../images/skills/github.svg";

//Programming Languages
import C from "../../images/skills/c.svg";
import CPP from "../../images/skills/cpp.svg";
import JAVA from "../../images/skills/java.svg";
import PYTHON from "../../images/skills/python.svg";

//Database
import MONGODB from "../../images/skills/mongodb.svg";
import MSSQL from "../../images/skills/mssql.svg";
import FIREBASE from "../../images/skills/firebase.svg";

//Version Control
import GIT from "../../images/skills/git-icon.svg";

const SkillsSection = () => {
    return (
        <SkillsContainer id="skills">
            <Fade left>
                <StyledH1White>SKILLS</StyledH1White>
            </Fade>
            <SkillsWrapper>
                
                {/*Front-End Skills*/}
                <Column1Wrapper>
                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Front-End</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={HTML5}/>
                            <SkillName>HTML 5</SkillName>

                            <SkillsIcon src={CSS3}/>
                            <SkillName>CSS 3</SkillName>

                            <SkillsIcon src={JAVASCRIPT}/>
                            <SkillName>Javascript</SkillName>

                            <SkillsIcon src={BOOTSTRAP}/>
                            <SkillName>Bootstrap</SkillName>

                            <SkillsIcon src={REACT}/>
                            <SkillName>React</SkillName>

                            <SkillsIcon src={ANDROID}/>
                            <SkillName>Android</SkillName>

                            <SkillsIcon src={REDUX}/>
                            <SkillName>Redux</SkillName>

                            <SkillsIcon src={REACT_ROUTER}/>
                            <SkillName>React Router</SkillName>

                            <SkillsIcon src={STYLED_COMPONENTS}/>
                            <SkillName>Styled Components</SkillName>

                            <SkillsIcon src={REACT_BOOTSTRAP}/>
                            <SkillName>React Bootstrap</SkillName>

                            <SkillsIcon src={MATERIALUI}/>
                            <SkillName>Material-UI</SkillName>

                        </SkillsCardContentWrapper>
                    </SkillsCard>
                </Column1Wrapper>
                {/*Back-End Skills and Hosting Platforms*/}
                
                <Column2Wrapper>
                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Back-End</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={NODE_JS}/>
                            <SkillName>Node.js</SkillName>

                            <SkillsIcon src={EXPRESS}/>
                            <SkillName>Express</SkillName>

                            <SkillsIcon src={DJANGO}/>
                            <SkillName>Django</SkillName>

                            <SkillsIcon src={FLASK}/>
                            <SkillName>Flask</SkillName>
                        </SkillsCardContentWrapper>
                    </SkillsCard>
                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Hosting Platforms</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={HEROKU}/>
                            <SkillName>Heroku</SkillName>

                            <SkillsIcon src={GITHUB_PAGES}/>
                            <SkillName>Github Pages</SkillName>
                        </SkillsCardContentWrapper>
                    </SkillsCard>
                </Column2Wrapper>
                {/*Programming Languages , Database and Version Control Skills*/}
                
                <Column3Wrapper>
                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Programming Languages</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={C}/>
                            <SkillName>C</SkillName>

                            <SkillsIcon src={CPP}/>
                            <SkillName>C++</SkillName>

                            <SkillsIcon src={JAVA}/>
                            <SkillName>Java</SkillName>

                            <SkillsIcon src={PYTHON}/>
                            <SkillName>Python</SkillName>

                            <SkillsIcon src={JAVASCRIPT}/>
                            <SkillName>Javascript</SkillName>
                        </SkillsCardContentWrapper>
                    </SkillsCard>

                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Database</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={MSSQL}/>
                            <SkillName>MS-SQL</SkillName>

                            <SkillsIcon src={MONGODB}/>
                            <SkillName>MongoDB</SkillName>

                            <SkillsIcon src={FIREBASE}/>
                            <SkillName>Firebase</SkillName>
                        </SkillsCardContentWrapper>
                    </SkillsCard>

                    <SkillsCard>
                        <Zoom left>
                            <StyledHeading>Version Control</StyledHeading>
                        </Zoom>
                        <hr/>
                        <SkillsCardContentWrapper>
                            <SkillsIcon src={GIT}/>
                            <SkillName>GIT</SkillName>
                        </SkillsCardContentWrapper>
                    </SkillsCard>
                </Column3Wrapper>
                
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SkillsSection
