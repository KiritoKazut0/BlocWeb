import styled from 'styled-components';
import { Perfil } from '../../../../Components/Atoms/Perfil';
import { Span } from '../Atoms/Span';
import { Card_Friends } from '../atoms/Card-Friends';
import { Card_Perfil } from '../atoms/Card-Perfil';
import { Container_Friend } from '../atoms/Container-Friends';
const Description = styled.div`
    width: calc(100% - 2vw);
    display: flex;
    justify-content: space-between;
    margin: 0 0 .5vw 1vw;
`;
export function FriendsPerfil() {
    const user = { nombre: "Joan Rosenbaum", text: "Ing. Sistemas computacionales" }
    const user2 = { nombre: "John Doe", text: "Lic. Marketing Digital" }
    return (
        <>
            <Card_Friends>
                <Span color='#000' size={"1.5vw"} name={"Amigos"} weigth={600} margin={".5vw 0 .5vw 1vw"} />
                <Description>
                    <Span color='#000' size={"1vw"} name={"123 amigos"} weigth={"500"} margin={"0"} />
                    <u> <Span color='#7F7F7F' size={".8vw"} name={"Buscar amigos"} margin={"0"} />  </u>
                </Description>
                <Container_Friend>
                    <Card_Perfil>
                        <Perfil usuario={user} size={".5wv"} margin={".5vw"} />
                    </Card_Perfil>
                    <Card_Perfil>
                        <Perfil usuario={user2} size={".5wv"} margin={".5vw"} />
                    </Card_Perfil>
                    <Card_Perfil>
                        <Perfil usuario={user} size={".5wv"} margin={".5vw"} />
                    </Card_Perfil>
                    <Card_Perfil>
                        <Perfil usuario={user2} size={".5wv"} margin={".5vw"} />
                    </Card_Perfil>
                </Container_Friend>
            </Card_Friends>
        </>
    )
}