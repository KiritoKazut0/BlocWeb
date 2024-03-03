import styled from 'styled-components';
import { Image } from '../Atoms/Image';
import { DateReciente } from './DateRecient';
const Card = styled.div`
    width: 92%;
    height: 60%;
    object-fit: cover;
    margin: 0 4%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: end;

`;
export function Card_Articulo({src}) {
    
    return (
        <>
            <Card>
                <Image src={src}
                    width={"100%"}
                    height={"100%"} />
                <DateReciente />
            </Card>

        </>

    )
}