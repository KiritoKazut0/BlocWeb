import styled from 'styled-components';
import { Interactive_Like } from '../Atoms/Interactive-Like';
import { Interactive_Comentarios } from '../Atoms/Interactive-Comentarios';
import { Interactive_Share } from '../Atoms/Interactive-Share';
const Barra = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3vw;
    background-color: #CBCBCB;
    div{
        display: flex;
    }
`;
export function Barra_Interactiva() {
    return (
        <>
            <Barra>
                <Interactive_Like />
                <div>
                    <Interactive_Comentarios />
                    <Interactive_Share />
                </div>
            </Barra>
        </>
    )
}