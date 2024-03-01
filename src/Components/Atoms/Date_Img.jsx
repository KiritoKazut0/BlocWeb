import styled from 'styled-components';
import { Date_Evento_Card } from './Date-Evento-Card';
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 3vw);
    margin-left: 1.5vw;
    height: 15vw;
`;
const Img = styled.img`
    width: 45%;
    height: 100%;
    object-fit: cover;
`;
export function Date_Img(){
    const user = {
        nombre: "Nombre",
        text: "Fecha"
    }
    return(
        <Info>
            <Img src="src/assets/multimedia/img/Rectangle 24.svg" alt="" />
            <Date_Evento_Card user={user}/>
        </Info>
    )
}