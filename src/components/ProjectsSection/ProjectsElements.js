import styled from 'styled-components';

export const ProjectsContainer =styled.div`
    height: 900px;
    background: #fff;
    @media screen and (max-width: 1000px){
        height: 1400px;
    }
    @media screen and (max-width: 768px){
        height: 1300px;
    }
    @media screen and (max-width: 515px){
        height: 1400px;
    }
    @media screen and (max-width: 480px){
        height: 2300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }
`;

export const ProjectsCard = styled.div`
    background: #101522;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    max-height: 1000px;
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.10);
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
`;

export const StyledHeading = styled.h2`
    color: #fff;
    font-size: 22px;
    text-align: center;
    padding-bottom: 20px;
    font-family: 'Kaushan Script', cursive;
`;

export const CropPredictionPicture = styled.img`
    max-height: 90%;
    max-width: 90%;
    padding-top: 30px;
    padding-bottom: 20px;
`;

export const FireStationPicture = styled.img`
    max-height: 90%;
    max-width: 90%;
    padding-top: 70px;
    padding-bottom: 20px;
`;

export const RealEstatePredictionPicture = styled.img`
    max-height: 80%;
    max-width: 80%;
    padding-top: 30px;
    padding-bottom: 20px;
`;

export const WebsitePicture = styled.img`
    max-height: 100%;
    max-width: 100%;
    padding-top: 75px;
    padding-bottom: 30px;
`;

export const ProjectsTextWrapper = styled.div`
    text-align: center;
    padding: 0 10px;
    font-size: 15px;
    color: #fff;
    font-family: 'Cardo', serif;
`;

export const ProjectsText2Wrapper = styled.div`
    text-align: center;
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    color: #fff;
    font-family: 'Cardo', serif;
`;