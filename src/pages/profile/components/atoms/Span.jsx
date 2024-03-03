import styled from 'styled-components';

const StyleSpan = styled.span `
    color: ${({ color }) => color || 'black'} ;
    font-size: ${({ size }) => size || '12px'} ;
    display: block;
    font-weight: ${({ line }) => line || '400'} ;
   

`;

export function Span ({name, color, size, line, weight} ){
    return (
        <>
            <StyleSpan 
            color={color} 
            size = {size}
            line ={line}
            weight= {weight} > 
            {name} 
            </StyleSpan>
        </>
    )
}