import React from "react";
import styled from 'styled-components';

const Img = styled.img `
    object-fit: cover;
    width: ${props => (props.img ? "80%" : "35%")};

   
`;

export default Img;