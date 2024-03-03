import { Span } from "../Atoms/Span"
import Parrafo from "../Atoms/Parrafos"
import styled from 'styled-components';


const Container = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #6B6B6B 100%);
   grid-column: 1;
   grid-row: 1;
   text-align: left;
   width: 90%;
   padding: 0 5%;
   
`;

const Button = styled.button`
background: #C5C5C5;
color: #FFFFFF;
border: none;
padding: 6px 8px;
border-radius: 4px;
margin: 10px 0;

`;

export function DateReciente() {
    return (
        <>
            <Container>
                <Span name={"Cary Johns"} color={"#FFFFFF"} size={"14px"} line={"16.94px"} weight={"600"} />
                <Parrafo details>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</Parrafo>
                <Button>saber más</Button>
            </Container>
        </>
    )
}