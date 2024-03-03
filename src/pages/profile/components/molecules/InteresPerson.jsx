import styled from 'styled-components';
import { Span } from '../atoms/Span';
import './InteresPerson.css'
const Items = styled.li`
    border-radius: 100vw;
    padding: .4vw 1vw;
    background-color: #EEEEEE;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;    
    justify-content: center;
    font-size: 1vw;
`;
export function InteresPerson() {
    return (
        <div className='container-InteresPerson'>
            <Span name={"Intereses"} color={"#7F7F7F"} size={"1.2vw"} line={"24.52px"} />
            <ul className='list-Interes'>
                <Items>Materias</Items>
                <Items>Deportes</Items>
                <Items>Comida</Items>
                <Items>Hobbies</Items>
                <Items>Peliculas/Series</Items>
            </ul>
        </div>
    )
}