import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
const Container = styled.div`
    width: ${props => props.primary ? "100%" : "fit-content"};
    height: ${props => props.primary ? "" : ""} ;
    margin-right: 50%;
`;
const List = styled.ul`
    width: fit-content;
    display: flex;
    font-size: .9vw;
    justify-content: space-between;
    list-style: none;
    color: #959595;
    margin: 1vw; 
    gap: 1vw;
`;
const Item = styled.li` 
    display: flex;
    align-items: center;
    justify-content: center; 
`;
export function IconSocial({ sizeIcon, primary }) {
    return (
        <Container primary={primary}>
            <List>
                <Item>  <InstagramIcon sx={{ fontSize: `${sizeIcon}`, marginRight: ".5vw" }} />  @JoannaRose  </Item>
                <Item>    <FacebookRoundedIcon sx={{ fontSize: `${sizeIcon}`, marginRight: ".5vw" }} />  /JoannaRose</Item>
                <Item>    <XIcon sx={{ fontSize: `${sizeIcon}`, marginRight: ".5vw" }} /> @JoannaRose </Item>
            </List>
        </Container>
    )
}