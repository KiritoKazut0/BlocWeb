import { Button_Dots } from "../Atoms/Button-Dots"
import styled from 'styled-components';
import { Perfil } from "../Atoms/Perfil";

const Header = styled.div`
    margin: 1vw 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export function Header_Articulo() {
    const user = {
        nombre: "Nombre",
        text: "Fecha"
    }
    return (
        <>
            <Header>
                <Perfil usuario={ user }/>
                <Button_Dots/>
            </Header>
        </>
    )
}