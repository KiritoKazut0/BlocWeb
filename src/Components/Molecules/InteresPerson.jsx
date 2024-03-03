import styled from 'styled-components';
import { Span } from '../Atoms/Span';
import './InteresPerson.css'

const Items = styled.li`
width: auto;
height: 25px;
border-radius: 40px;
padding: 4px 10px;
background-color: #EEEEEE;
display: flex;
align-items: center;    
justify-content: center;
font-size: 14px;
`;

export function InteresPerson (){
    return (
        <>
           <div className='container-InteresPerson'>
           <Span name={"Intereses"} color={"#7F7F7F"} size={"12px"} line={"24.52px"} />
        
            <ul className='list-Interes'>
                <Items>Materias</Items>
                <Items>Deportes</Items>
                <Items>Comida</Items>
                <Items>Hobbies</Items>
                <Items>Peliculas/Series</Items>
            </ul>
           </div>
        </>
    )
}