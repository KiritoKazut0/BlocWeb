import styled from 'styled-components';

const Img = styled.img`
    object-fit: cover;
    border-radius: ${({ borderRadius }) => borderRadius || '0%'};
    width: ${({ width }) => width || '10vw'};
    height: ${({ height }) => height || 'auto'};
`;

export function Logo({ width, height, borderRadius }) {
    return (
        <>
            <Img
                src='https://i.imgur.com/EdH0Gr8.png'
                width={width}
                height={height}
                borderRadius={borderRadius}
            />
        </>
    );
}