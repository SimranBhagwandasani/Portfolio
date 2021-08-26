import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#6600CC' : '#00CCFF')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-ease-in-out;

    &:hover{
        transition: all 0.2 ease-ease-in-out;
        background: #fff;
        color: #000;
        background: ${({primary}) => (primary ? '#00CCFF' : '#6600CC' )};
    }
`;
