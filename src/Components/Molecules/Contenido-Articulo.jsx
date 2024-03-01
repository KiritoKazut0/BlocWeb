import styled from 'styled-components';
import { Parrafo_Articulo } from '../Atoms/Parrafo-Articulo';
const Contenido = styled.div`
    margin: 1vw 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    img{
        width: 65%;
        margin-left: 1.5vw;
    }
`;
export function Contenido_Articulo(){
    return(
        <Contenido>
            <Parrafo_Articulo/>
            <img src="src/assets/multimedia/img/Rectangle 24.svg" alt="" />
        </Contenido>
    )
}