import styled from 'styled-components';
import { Perfil } from '../Atoms/Perfil';
import { Span } from '../Atoms/Span';
const Container = styled.div`
    width: 25vw;
    height: 100%;
    background-color: #F3F3F3;
`;

const Description = styled.div`
    width: 85%;
    height: 20%;
    display: flex;
    justify-content: space-between;
`;

const user = {nombre: "Joan Rosenbaum", text: "Ing. Sistemas computacionales" }
const user2 = {nombre: "John Doe", text: "Lic. Marketing Digital" }


 export function FriendsPerfil() {
    return (
        <>
            <Container>
                <Span color='#000' size={"18px"} line={"21.78px"} name={"Amigos"}  />

                <Description>
                    <Span color='#000' size={"12px"} line={"14.52px"} name={"123 amigos"}  />
                    <u> <Span color='#7F7F7F' size={"10px"} line={"12.1px"} name={"123 amigos"} />  </u>
                </Description>
                <Perfil usuario={user} size={".5wv"} margin={".5wv"} />
                <br />
                <Perfil usuario={user2} size={".5wv"}  margin={".5wv"} />
            </Container>
        </>
    )
}