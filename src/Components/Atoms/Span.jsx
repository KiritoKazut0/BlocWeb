import React from "react";
import styled from 'styled-components';

const Span = styled.span `
    font-size: ${props => (props.name? "12px": "")};
    font-weight: ${props =>(props.name? "600": "")};    
`;

export default Span;