import React from 'react'

import 
{
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsCard,
    StyledHeading,
    CropPredictionPicture,
    FireStationPicture,
    RealEstatePredictionPicture,
    WebsitePicture,
    ProjectsTextWrapper,
    ProjectsText2Wrapper
} from "./ProjectsElements";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import 
{ 
    StyledH1Black
} from '../AboutSection/AboutElements';


import 
{
    ImageWrapper
} from "../AchievementsSection/AchievementsElements";

import CropPrediction from "../../images/projects/crop_yield.svg";
import FireStation from "../../images/projects/fire_station.svg";
import RealEstatePrediction from "../../images/projects/real_estate.svg";
import Website from "../../images/projects/craft_packaging.svg";

const ProjectsSection = () => {
    return (
        <ProjectsContainer id="projects">
            <Fade left>
                <StyledH1Black>PROJECTS</StyledH1Black>
            </Fade>

            <ProjectsWrapper>

                {/*Card for Optimal Prediction of Crop Yield*/}
                <ProjectsCard onClick={() =>{return(window.open("https://github.com/SimranBhagwandasani/Optimal-Prediction-of-Crop-Yield"))}}>
                    <Zoom left>
                        <StyledHeading>Harvest Treasure</StyledHeading>
                    </Zoom>
                    <ImageWrapper>
                        <CropPredictionPicture src={CropPrediction}></CropPredictionPicture>
                    </ImageWrapper>
                    <ProjectsTextWrapper>
                        The system predicts the best-possible crops and the optimal yield of the predicted crops as per the area of the land fed as input in the Android app, while considering the location and weather parameters. The system also takes into consideration the production of crops in the previous years and suggests which are the most suitable crops that can be cultivated in the environmental conditions of various parts of India. It is an Android app with a Firebase Database connected to a Flask Server and analysis has been done using RStudio.
                    </ProjectsTextWrapper>
                </ProjectsCard>
    
                {/*Card for Byculla Fire Station Application*/}
                <ProjectsCard onClick={() =>{return(window.open("https://github.com/SimranBhagwandasani/Byculla-Fire-Station-Application"))}}>
                    <Zoom left>
                        <StyledHeading>Fire Station App</StyledHeading>
                    </Zoom>
                    <ImageWrapper>
                        <FireStationPicture src={FireStation}></FireStationPicture>
                    </ImageWrapper>
                    <ProjectsTextWrapper>
                        An Android Application which can be used to inform the authorities in case of a fire outrage. The application detects your location and fetches the details of the nearest fire station and hospital and sends requests to the same for emergency arrival. The project was made during a Hackathon in Mumbai and covers the location named Byculla, a region in Greater Bombay, India.
                    </ProjectsTextWrapper>
                </ProjectsCard>
                    
                {/*Card for Real Estate Price Prediction Model*/}
                <ProjectsCard  onClick={() =>{return(window.open("https://github.com/SimranBhagwandasani/Real-Estate-Price-Prediction-Model"))}}>
                    <Zoom left>
                        <StyledHeading>Smart Property Finder</StyledHeading>
                    </Zoom>
                    <ImageWrapper>
                        <RealEstatePredictionPicture src={RealEstatePrediction}></RealEstatePredictionPicture>
                    </ImageWrapper>
                    <ProjectsTextWrapper>
                        A data science project for real estate price prediction. The model has been built using sklearn and linear regression using Bangalore home prices dataset. A Python Flask server uses the saved model to serve http requests. The website is built in HTML, CSS and Javascript that allows the user to enter home square ft area, bedrooms etc and it will call Python flask server to retrieve the predicted price.
                    </ProjectsTextWrapper>
                </ProjectsCard>

                {/*Card for Crafts Packaging Website*/}
                <ProjectsCard onClick={() =>{return(window.open("https://craftpackaging.in/"))}}>
                    <Zoom left>
                        <StyledHeading>Craft Packaging Website</StyledHeading>
                    </Zoom>
                    <ImageWrapper>
                        <WebsitePicture src={Website}></WebsitePicture>
                    </ImageWrapper>
                    <ProjectsText2Wrapper>
                        An end-to-end website made for a company which focuses on premier packaging and manufacturing.
                    </ProjectsText2Wrapper>
                </ProjectsCard>
                
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectsSection
