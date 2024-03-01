import styled from 'styled-components';
import { Parrafo_Articulo } from '../Atoms/Parrafo-Articulo';
import { Date_Img } from '../Atoms/Date_Img';
const Contenido = styled.div`
    margin: 1vw 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1vw;
`;
export function Contenido_Evento() {
    return (
        <Contenido>
            <Parrafo_Articulo/>
            <Date_Img/>
        </Contenido>
    )
}
