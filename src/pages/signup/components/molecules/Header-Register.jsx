import styled from 'styled-components';
import { Logo } from '../../../../Components/Atoms/Image';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 1vw;
    margin-top: 5%;
    span{
        text-align: center;
        font-size: 1vw;
        color: #959595;
    }
    img{
        margin-bottom: 1vw;
    }
`;
export function Header_Register() {
    return (
        <Container>
            <Logo/>
            <span>Únete a nuestra comunidad estudiantil</span>
            <span>Bienvenido a nuestra red social estudiantil. Regístrate ahora para conectarte con compañeros, acceder a recursos educativos
                y participar en eventos emocionantes.</span>
        </Container>
    )
}