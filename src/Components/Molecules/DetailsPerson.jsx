import styled from 'styled-components';
import { Span } from "../Atoms/Span";

const ContainerDetails = styled.div `

    width: 45%;
    height: 40%;
`;

const Name = styled.h1 `
    font-size: 24px;
    color: #000;
`;


export function DetailsPerson (){
    return (
        <>
          <ContainerDetails>
            <Name> Joanna Rosenbaum </Name>
            <Span name ={"Ing. Sistemas de la información"} color={"black"} size={"18px"} line={"38px"}   />
            <Span name ={"Chiapas, México"} color={"#7F7F7F"} size={"16px"} line={"20.36px"} /> 
            </ContainerDetails>  
        </>
    )
}