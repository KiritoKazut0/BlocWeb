import styled from 'styled-components'
const Button = styled.button`
   width: ${props => (props.icons ?" 100px": props.settings ? "2.8vw": "4vw")};
   height: ${props => (props.icons ? "41px": "41px")};
   padding: ${props => (props.perfil ? "12px":props.settings? "1vw": "")};
   border-radius: ${props => (props.icons ? ".4vw": ".4vw")};
   border: none;
   background: ${props => (props.icons ? "#C5C5C5": props.settings? "#C5C5C5": "#959595")};
   color: ${props => (props.icons ? "#000000 ": "#CCCCC")};
   font-size: ${props => (props.icons ? "14px": "12px")};
   margin: ${props =>(props.icons ? "": "10px 0px")};
   font-family: ${props =>(props.icons ? '"Inter", sans-serif;': "")};
   display: flex;
   align-items: center;
   justify-content: center;
   
   
`;


export default Button;
