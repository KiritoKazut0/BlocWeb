import styled from 'styled-components';
const Title = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 3vw);
    height: 3vw;
    margin-left: 1.5vw;
    background-color: #FFFFFF;
    border-radius: .3vw;
    h1{
        font-size: 1.1vw;
        margin-left: 1vw;
    }
`;
export function Title_Comunicado(){
    return(
        <Title>
            <h1> COMUNICADO IMPORTANTE </h1>
        </Title>
    )
}