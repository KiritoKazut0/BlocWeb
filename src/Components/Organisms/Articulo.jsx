import styled from 'styled-components';
import { Header_Articulo } from '../Molecules/Header-Articulo';
import { Barra_Interactiva } from '../Molecules/Barra-Interactiva';
import { Interactions_info } from '../Molecules/Interactions-info';
import { Contenido_Articulo } from '../Molecules/Contenido-Articulo';

const Card = styled.div`
    border: 1px solid #CBCBCB;
    width:calc(100% - 2px);
    background-color: #F3F3F3;
`;
export function Articulo() {
    return (
        <>
            <Card>
                <Header_Articulo/>
                <Contenido_Articulo/>
                <Interactions_info/>
                <Barra_Interactiva/>
            </Card>
        </>
    )
}