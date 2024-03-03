import { AcercaDe } from "../molecules/AcercaDe";
import { FriendsPerfil } from "../molecules/FriendsPerfil";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
`;

export function DatePerson() {
    return (
        <>
            <Container>
                <AcercaDe />
                <FriendsPerfil /> 
            </Container>
        </>
    )
}