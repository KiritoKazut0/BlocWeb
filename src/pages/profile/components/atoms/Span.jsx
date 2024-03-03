import styled from 'styled-components';

const StyleSpan = styled.span `
    color: ${({ color }) => color || 'black'} ;
    font-size: ${({ size }) => size || '12px'} ;
    display: block;
    font-weight: ${({ weigth }) => weigth || '400'};
    margin:  ${({ margin }) => margin || '.5vw 0'};
`;

export function Span ({name, color, size, margin, weigth} ){
    return (
        <>
            <StyleSpan 
            color={color} 
            size = {size}
            margin={margin} 
            weigth={weigth}> 
            {name} 
            </StyleSpan>
        </>
    )
}