import styled from 'styled-components';
import { Logo_Buscador } from '../Molecules/Logo_Buscador';
const He = styled.header`
    margin: 1vw;
    width: 98%;
    height: 6vw;
    background-color: #D9D9D9;
`;
export function Header(){
    return(
        <He>
            <Logo_Buscador/>
        </He>
    )
}