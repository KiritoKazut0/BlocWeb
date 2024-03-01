import styled from 'styled-components';
const Div = styled.div`
    margin-top: .7vw;
    display: flex;
    h2{
        font-size: 1.5vw;
        font-weight: 500;
        height: 1.6vw;
    }
`;
const Fecha = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #EEEEEE;
    margin-left: .7vw;
    width: 4vw;
    height: 4.2vw;
    gap: 0px;
    span{
        font-size: .65vw;
        font-weight: 500;
    }
`;
const Title_Hour = styled.div`
    margin-left: .5vw;
    display: flex;
    flex-direction: column;
    gap: .3vw;
    span{
        font-size: 1.2vw;
        font-weight: 400;
    }
`;
export function Date(){
    return(
        <Div>
            <Fecha>
                <h2> 24 </h2>
                <span> marzo </span>
            </Fecha>
            <Title_Hour>
                <h2> Figma ipsum Event </h2>
                <span> 14:00 hrs </span>
            </Title_Hour>
        </Div>
    )
}