import styled from 'styled-components';

export const ContactContainer =styled.div`
    height: 750px;
    background: #101522;
    @media screen and (max-width: 1025px){
        height: 600px;
    }
    @media screen and (max-width: 1000px){
        height: 650px;
    }
    @media screen and (max-width: 768px){
        height: 900px;
    }
    @media screen and (max-width: 480px){
        height: 800px;
    }
`;

export const ContactWrapper =styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-right: 70px;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding-right: 30px;
        padding-left: 30px;
    }
`;
export const ContactPictureWrapper = styled.div`
    text-align: center;
`;

export const ContactPicture = styled.img`
    border-radius: 50%;
    max-height: 100%;
    max-width: 70%;

    @media screen and (max-width: 1000px){
        max-height: 100%;
        max-width: 80%;
    }

    @media screen and (max-width: 768px){
        max-height: 100%;
        max-width: 60%;
    }
`;

export const ContactDescriptionWrapper = styled.div`
    max-height: 800px;
    margin-top: -100px;
    max-width: 800px;
    @media screen and (max-width: 1025px){
        padding-top: 50px;
    }
    @media screen and (max-width: 768px){
        padding-top: 80px;
    }
    @media screen and (max-width: 480){
        padding-top: 100px;
    }
`;

export const ContactDescriptionHeading = styled.h2`
    font-size: 2rem;
    color: #fff;
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom : 50px;
    text-align: center;
    font-family: 'Kaushan Script', cursive;
    
    @media screen and (max-width: 1000px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 768px){
        padding-top: 60px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;        
    }
`;

export const IconsWrapper = styled.div`
    padding-top: 50px;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr ; 
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
        padding-top: 0;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const IconDesigner = styled.div`
    color: #000;
`;

export const CopyrightWrapper = styled.div`
    height: 50px;
    max-width: 1400px;
    background: white;
`;

export const Copyright = styled.h3`
    color: #000;
    text-align: center;
`; 