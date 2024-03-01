import styled from 'styled-components';
import { Logo } from '../Atoms/Logo';
import { Buscador } from '../Atoms/Buscador';
const Div = styled.div`
    margin-left: 1vw;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1vw;
`;
export function Logo_Buscador(){
    return(
        <Div>
            <Logo/>
            <Buscador/>
        </Div>
    )
}