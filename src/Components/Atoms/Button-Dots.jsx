import styled from 'styled-components';

const Button = styled.div`
    margin-right: 2%;
    width: 3vw;
    display: flex;
    align-items: center;
    button{
        height: 15px;
        width: 100%;
        background-color: transparent;
        background-image: url('src/assets/multimedia/img/more_horiz.svg');
        background-repeat: no-repeat;
        background-size: 3vw;
        filter: contrast(100%);
        background-position: 0;
        border: 0;
        transition: .5s ease-in-out;
        cursor: pointer;
        border-radius: 50px;
    }
    button:hover{
        filter: contrast(0%);
    }
`;

export function Button_Dots() {
    return (
        <Button>
            <button></button>
        </Button>
    )
}