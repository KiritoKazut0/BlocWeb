import styled from 'styled-components';

const StyleSpan = styled.span `
    color: ${({ color }) => color || 'black'} ;
    font-size: ${({ size }) => size || '12px'} ;
    line-height: ${({ line }) => line || ''} ;
    display: block;
    font-weight: 400;

`;

export function Span ({name, color, size, line} ){
    return (
        <>
            <StyleSpan 
            color={color} 
            size = {size}
            line ={line} > 
            {name} 
            </StyleSpan>
        </>
    )
}