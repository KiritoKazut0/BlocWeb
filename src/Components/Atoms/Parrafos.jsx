import styled from 'styled-components';

const Parrafo = styled.p`
 font-family: "Inter", sans-serif;
 font-size: 12px;
 padding: ${props => (props.parrafoArticle? "15px 40px 15px 22px": "none")};
 font-weight: 400;
 line-height: 14.52px;
 color: ${props => (props.parrafoArticle ? "#000000": props.details? "#ffff":  "#959595")};
`
    
export default Parrafo;
