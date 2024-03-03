import styled from 'styled-components';

const StyleSpan = styled.span `
    color: ${({ color }) => color || 'black'} ;
    font-size: ${({ size }) => size || '12px'} ;
    display: block;
    font-weight: ${({ line }) => line || '400'} ;
    margin:${({ margin }) => margin || '0'} ;
`;

export function Span ({name, color, size, line, weight, margin} ){
    return (
        <>
            <StyleSpan 
            color={color} 
            size = {size}
            line ={line}
            weight= {weight}
            margin={margin} > 
            {name} 
            </StyleSpan>
        </>
    )
}