import styled from 'styled-components';
import { Header_Articulo } from '../Molecules/Header-Articulo';
import { Barra_Interactiva } from '../Molecules/Barra-Interactiva';
import { Interactions_info } from '../Molecules/Interactions-info';
import { Contenido_Comunicado } from '../Molecules/Contenido-Comunicado';
import { Contenido_Evento } from '../Molecules/Contenido-Evento';

const Card = styled.div`
    border: 1px solid #CBCBCB;
    width:calc(100% - 2px);
    background-color: #F3F3F3;
`;

export function Articulo_Evento(){
    return(
        <>
            <Card>
                <Header_Articulo/>
                <Contenido_Evento/>
                <Interactions_info/>
                <Barra_Interactiva/>
            </Card>
        </>
    )
}