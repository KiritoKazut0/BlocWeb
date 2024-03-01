import styled from 'styled-components';
import { Icon_Like } from '../Atoms/Icon-Like';
import { Icon_Comentario } from '../Atoms/Icon-Comentario';
import { Icon_Share } from '../Atoms/Icon-Share';

const Card = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    margin: 1vw 0px 1.5vw 0px;
    :first-child{
        margin-left: 1.5vw;
    }
    p{
        font-size: 1vw;
        margin: 0px 2.5vw 0px .5vw;
    }
`;

export function Interactions_info(){
    return(
        <Card>
            <Icon_Like color={"red"} Size={"1.5vw"}/>
            <p> 0 Me gustas </p>
            <Icon_Comentario Size={"1.5vw"}/>
            <p> 0 Comentarios </p>
            <Icon_Share Size={"1.5vw"}/>
            <p> 0 Compartidas </p>
        </Card>
    )
}