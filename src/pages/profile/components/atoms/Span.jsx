import styled from 'styled-components';

const StyleSpan = styled.span `
    color: ${({ color }) => color || 'black'} ;
    font-size: ${({ size }) => size || '12px'} ;
    display: block;
    font-weight: 400;
    margin: .5vw 0;
`;

export function Span ({name, color, size} ){
    return (
        <>
            <StyleSpan 
            color={color} 
            size = {size} > 
            {name} 
            </StyleSpan>
        </>
    )
}