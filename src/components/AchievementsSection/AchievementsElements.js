import styled from 'styled-components';

export const AchievementsContainer =styled.div`
    height: 800px;
    background: #fff;
    @media screen and (max-width: 1025px){
        height: 800px;
    }
    @media screen and (max-width: 1000px){
        height: 1100px;
    }
    @media screen and (max-width: 768px){
        height: 1300px;
    }
    @media screen and (max-width: 480px){
        height: 2300px;
    }
`;

export const AchievementsWrapper = styled.div`
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

export const AchievementsCard = styled.div`
    background: #101522;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 20px;
    height: 450px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.10);
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px){
        height: 400px;
    }

    @media screen and (max-width: 768px){
        height: 480px;
    }
`;

export const StyledHeadingWhite = styled.h2`
    color: #fff;
    font-size: 25px;
    text-align: center;
    padding-bottom: 40px;
    font-family: 'Kaushan Script', cursive;
`;

export const ImageWrapper = styled.div`
    text-align: center;
`;

export const AchievementsPicture = styled.img`
    max-height: 100%;
    max-width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const PublicationPicture = styled.img`
    max-height: 90%;
    max-width: 80%;
    padding-top: 30px;
    padding-bottom: 30px;

    @media screen and (max-width: 1000px){
        padding-top: 0;
    }
`;

export const HackathonTextWrapper = styled.div`
    text-align: center;
    padding: 70px 20px;
    margin-top: 10px;
    font-size: 18px;
    font-family: 'Cardo', serif;
`;

export const PublicationTextWrapper = styled.div`
    text-align: center;
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 18px;
    font-family: 'Cardo', serif;
`;

export const SecondYearTextWrapper = styled.div`
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Cardo', serif;
`;

export const ThirdYearTextWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 17px;
    font-family: 'Cardo', serif;
`;