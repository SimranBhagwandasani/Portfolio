import styled from 'styled-components';

export const ExperienceContainer =styled.div`
    height: 2700px;
    background: #101522;
    @media screen and (max-width: 1170px){
        height: 2700px;
    }
    @media screen and (max-width: 1025px){
        height: 2200px;
    }
    @media screen and (max-width: 1000px){
        height: 2200px;
    }
    @media screen and (max-width: 790px){
        height: 2350px;
    }
    @media screen and (max-width: 508px){
        height: 2400px;
    }
    @media screen and (max-width: 440px){
        height: 2700px;
    }
`;

export const ExperienceLogoWrapper = styled.div`
    text-align: center;
    padding-bottom: 20px;
`;

export const ExperienceLogo = styled.img`
    height: 150px;
    width: 150px;
`;

export const ExperienceDescription = styled.p`
    text-align: center;
`;