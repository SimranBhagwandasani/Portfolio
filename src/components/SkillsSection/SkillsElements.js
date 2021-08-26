import styled from 'styled-components';

export const SkillsContainer =styled.div`
    height: 1400px;
    background: #101522;
    @media screen and (max-width: 1025px){
        height: 1400px;
    }
    @media screen and (max-width: 1000px){
        height: 2400px;
    }
    @media screen and (max-width: 768px){
        height: 3100px;
    }
    @media screen and (max-width: 480px){
        height: 3200px;
    }
`;

export const StyledH1White = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    padding-top: 80px;
    padding-bottom: 60px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;        
    }
`;

export const SkillsWrapper = styled.div`
    /*max-width: 1400px;*/
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 0 50px; 
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

export const SkillsCard = styled.div`
    background: #fff;
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
    color: #000;
    font-size: 30px;
    text-align: center;
    padding-bottom: 20px;
    font-family: 'Kaushan Script', cursive;
`;

export const SkillsCardContentWrapper = styled.div`
    padding-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Column1Wrapper = styled.div`
    display: grid;
    grid-gap: 30px;
    max-height: 1000px;
    
    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`;

export const Column2Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    max-height: 730px;
    @media screen and (max-width: 1000px){
        grid-template-rows: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-rows: 1fr;
        padding: 0 20px;
    }
`;

export const Column3Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    max-height: 800px;
    @media screen and (max-width: 1000px){
        grid-template-rows: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-rows: 1fr;
        padding: 0 20px;
    }
`;

export const SkillsIcon = styled.img`
    max-width: 5rem;
    max-height: 5rem;
    align-items: left;
    padding-left: 20px;
    padding-bottom: 20px;
`;

export const SkillName = styled.p`
    margin-top: 15px;
    font-size: 18px;
    align-items: right;
    padding-bottom: 20px;
`;