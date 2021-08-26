import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';

export const AboutContainer =styled.div`
    height: 800px;
    background: #fff;
    @media screen and (max-width: 1025px){
        height: 900px;
    }
    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1000px;
    }
`;

export const StyledH1Black = styled.h1`
    font-size: 2.5rem;
    color: #000;
    padding-top: 90px;
    padding-bottom: 50px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;        
    }
`;

export const AboutWrapper =styled.div`
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

export const ProfileWrapper = styled.div`
    text-align:center;
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    max-height: 100%;
    max-width: 70%;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 30px;
  background: #101522;
  padding: 0 20px;
  color: #fff;
  border-radius: 20px;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    @media screen and (max-width: 768px){
      font-size: 1rem;
      text-align: center;
    }
    @media screen and (max-width: 480px){
      font-size: 0.9rem;
      text-align: center;
    }
`;

export const AboutBtnWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const AboutBtnLink = styled(LinkR) `
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`;