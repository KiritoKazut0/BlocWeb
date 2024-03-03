import styled from 'styled-components';
import { Image } from '../Atoms/Image';
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
            <Image src={"https://i.imgur.com/EdH0Gr8.png"}/>
            <Buscador/>
        </Div>
    )
}