import styled from 'styled-components';
const P = styled.p`
    font-size: 1vw;
    font-weight: 500;
    text-align: justify;
    width: calc(100% - 3vw);
    height: 4vw;
    overflow: hidden;
    overflow-y: scroll;
    margin-left: 1.5vw;

    &::-webkit-scrollbar {
        width: 0px;
    }
`;
export function Parrafo_Articulo(){
    return(
        <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo ratione explicabo tenetur laboriosam perspiciatis ullam dolorem dolore, illum asperiores quae voluptate, blanditiis obcaecati quam dolores natus ducimus? Consequatur, nesciunt.
        </P>
    )
}