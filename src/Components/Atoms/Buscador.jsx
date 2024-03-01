
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
const Div = styled.div`
    width: 20vw;
    height: 3vw;
    display: flex;
    align-items: center;
    border-radius: .4vw;
    border: 1px solid #C5C5C5;
    background-color: #FFFFFF;
    input{
        border: 0;
        width: 80%;
        height: 50%;
        padding-left: 2%;
    }

    input::placeholder{
        color: #C5C5C5;
        font-size: 1vw;
        font-weight: 400;
    }
`;
export function Buscador() {
    return (
        <Div>
            <SearchIcon
                sx={{
                    color: "#929292",
                    marginLeft: "5px",
                    fontSize: "2vw"
                }}
            />
            <input type="text" placeholder='Buscar'/>
        </Div>
    )
}