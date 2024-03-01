import styled from 'styled-components';
const Div = styled.div`
    display: flex;
    gap: .5vw;
    margin-left: ${props => (props.Margin ? props.Margin : "1.5vw")};
    img{
        width: ${props => (props.Size ? props.Size : "3vw")};
    }
`;
const P = styled.p`
    font-weight: ${props => props.Weight};
    font-size: ${props => props.Size};
    margin-left: .5vw;
`;
export function Perfil({size, usuario, margin}) {
    return (
        <Div Size={size} Margin={margin}>
            <img src="src/assets/multimedia/img/Perfil-icon.svg" alt="" />
            <div>
                <P Weight={"700"} Size={"1vw"}>
                    { usuario.nombre }
                </P>
                <P Weight={"500"} Size={".7vw"}>
                    { usuario.text }
                </P>
            </div>
        </Div>
    )
}