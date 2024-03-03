import SettingsIcon from '@mui/icons-material/Settings';
import styled from 'styled-components';
import { Button_Nav } from '../Atoms/Button-Nav';
import { Icon } from '@mui/material';
import IconSettings from '../Atoms/iconSettings';
const Div = styled.div`
    width: 90%; 
    display: flex;
    justify-content: space-between;
    ul{
        display: flex;
        gap: 1vw;
        display: flex;
        align-items: center;
    }
    .Nav{
        margin-left: 1vw;
    }
    .Setting{
        margin-right: 1vw;
    }
`;
export function Nav() {
    return (
        <Div>
            <ul className='Nav'>
                <Button_Nav text={"Inicio"} />
                <Button_Nav text={"Grupos"} />
                <Button_Nav text={"Articulos"} />
                <Button_Nav text={"Comunicados"} />
            </ul>
            <ul className='Setting'>
                <Button_Nav text={"Mi perfil"} />
                <Button_Nav text={
                    <IconSettings/>
                } padding={".78vw"}/>
            </ul>
        </Div>
    )
}