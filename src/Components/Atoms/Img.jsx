import styled from 'styled-components';

const Img = styled.img `
    object-fit: cover;
    width: ${props => (props.img ? "80%" : props.iconImage ? "40px": "35%")};
    height: ${props => (props.iconImage ? "40px": "")};
    border-radius: ${props => (props.iconImage? "50%": "")};
`;

export default Img;