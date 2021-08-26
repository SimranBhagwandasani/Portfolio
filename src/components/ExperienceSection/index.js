import React from 'react'
import { ReactComponent as WorkIcon } from "../../images/experience/work.svg";
import { ReactComponent as CollegeIcon } from "../../images/experience/college.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import 
{
    ExperienceContainer,
    ExperienceLogoWrapper,
    ExperienceLogo,
    ExperienceDescription
} from "./ExperienceElements";
import
{
    StyledH1White
} from "../SkillsSection/SkillsElements";
import "react-vertical-timeline-component/style.min.css";
import Fade from 'react-reveal/Fade';
import "./styles.css";


const ExperienceSection = () => {
  let workIconStyles = { background: "#6600CC" };
  let collegeIconStyles = { background: "#00CCFF" };

  return (
    <ExperienceContainer id="experience">
        <Fade left>
            <StyledH1White>EXPERIENCE</StyledH1White>
        </Fade>
        <VerticalTimeline>
            {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
                <VerticalTimelineElement
                key={element.key}
                // date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : collegeIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <CollegeIcon />}
                >
                <ExperienceLogoWrapper>
                    <ExperienceLogo src={element.logo}></ExperienceLogo>
                </ExperienceLogoWrapper>
                <h2 className="vertical-timeline-element-title" style={{textAlign: 'center',color: 'black', fontSize: '1.4rem'}}>{element.title}</h2>
                <br/>
                <h4 style={{textAlign: "center", fontSize: '1.4rem', fontFamily: 'Cedarville Cursive,cursive'}}>{element.designation}</h4>
                <br/>
                <h5 style={{textAlign: "center", fontSize: '1.1rem', fontFamily: 'Tinos, serif'}}>({element.date})</h5>
                <ExperienceDescription>{element.description}</ExperienceDescription>
                </VerticalTimelineElement>
            );
            })}
        </VerticalTimeline>
    </ExperienceContainer>
  );
}

export default ExperienceSection;