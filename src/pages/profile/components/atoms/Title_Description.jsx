import styled from 'styled-components';
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4%;
    width: 92%;
    height: fit-content;
    gap: .5vw;
    h3{
        font-size: 1.3vw;
    }
    span{
        font-size: 1vw;
    }
`;
export function Title_Description({ title, description }){
    return(
        <Div>
            <h3> { title }</h3>
            <span>{ description }</span>
        </Div>
    )
}