import styled from 'styled-components';
import { Title_Description } from '../../../../Components/Molecules/Title_Description';
import { Card_Articulo } from '../../../../Components/Molecules/Card_Articulo';
const Card = styled.div`
    margin: .5vh 0px;
    width: 100%;
    height: 500px;
    background-color: #D9D9D9;
`;
export function User_Articulos(){
    return(
        <Card>
            <Title_Description title={"Tus Artículos"} description={"Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."}/>
            <Card_Articulo/>
        </Card>
    )
}