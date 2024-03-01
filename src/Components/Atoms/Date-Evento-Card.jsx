import styled from 'styled-components';
import { Perfil } from './Perfil';
import { Date } from './Date';
const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: 52%;
    height: 100%;
    background-color: #FFFFFF;
    li{
        color: #5089F7;
        font-size: 1.5vw;
        text-decoration: underline;
        list-style: none;
        margin-left: .7vw;
        cursor: pointer;
        transition: all.3s ease-in-out;
    }
    li:hover{
        color: #0055ff;
    }
    .Participantes{
        margin-left: .7vw;
        font-weight: 500;
    }
`;
export function Date_Evento_Card({user}){
    return(
        <Card>
            <Date/>
            <Perfil usuario={ user } size={"2.2vw"} margin={".7vw"}/>
            <li> Aparta tu lugar </li>
            <span className='Participantes'> 16 participantes </span>
        </Card>
    )
}