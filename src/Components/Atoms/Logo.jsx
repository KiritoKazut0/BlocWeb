import styled from 'styled-components';

const Img = styled.img`
    object-fit: cover;
    border-radius: ${({ borderRadius }) => borderRadius || '0%'};
    width: ${({ width }) => width || '9vw'};
    height: ${({ height }) => height || 'auto'};
    position: ${({ position }) => position || ''} ;
    top: ${({ top }) => top|| ''} ;
    left: ${({ left }) => left || ''} ;


    
`;

export function Logo ({ width, height, borderRadius, src, position, top, left }) {
    return (
        <>
            <Img
                src={src}
                width={width}
                height={height}
                borderRadius={borderRadius}
                position = {position}
                top = {top}
                left = {left}

            />
        </>
    );
}