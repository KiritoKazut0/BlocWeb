import styled from 'styled-components';

const Img = styled.img `
    object-fit: cover;
    width: ${props => (props.img ? "80%" : props.iconImage ? "36px": "35%")};
    height: ${props => (props.iconImage ? "100%": "")};
    border-radius: ${props => (props.iconImage? "50%": "")};
`;

export default Img;