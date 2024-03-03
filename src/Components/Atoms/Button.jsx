import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
   width: ${props => (props.icons ? "80px" : props.settings ? "41px" : "150px")};
   height: ${props => (props.icons ? "41px" : "41px")};
   padding: ${props => (props.perfil ? "12px" : props.settings ? "8px" : "")};
   border-radius: ${props => (props.icons ? "3px" : "5px")};
   border: none;
   background: ${props => props.color || (props.icons ? "#C5C5C5" : props.settings ? "#C5C5C5" : "#959595")};
   color: ${props => props.textColor || (props.icons ? "#000000" : "#CCCCC")};
   font-size: ${props => (props.icons ? "14px" : "12px")};
   margin: ${props => (props.icons ? "" : "10px 0px")};
   font-family: ${props => (props.icons ? '"Inter", sans-serif' : "")};
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   &:hover {
      cursor: pointer; 
    }
`;

export default Button;
