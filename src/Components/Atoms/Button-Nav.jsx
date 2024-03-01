import styled from 'styled-components';
const B = styled.li`
    background-color: #C5C5C5;
    display: flex;
    align-items: center;
    padding: ${props =>(props.Padding ? props.Padding : "1vw")};
    border-radius: .4vw;
    list-style: none;
    height: 1vw;
    span{
        font-size: 1vw;
        font-weight: 600;
    }
`;
export function Button_Nav({text, padding}){
    return(
        <B Padding={ padding }>
            <span>{ text }</span>
        </B>
    )
}