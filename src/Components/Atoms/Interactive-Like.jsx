import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Interactive = styled.div`
    display: flex;
    align-items: center;
    gap: .5vw;
    margin-left: 1.5vw;
    button{
        border-radius: 50%;
        height: fit-content;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    p{
        font-size: .9vw;
        color: #7F7F7F;
    }
`;

export function Interactive_Like() {
    return (
        <Interactive>
            <button>
                <FavoriteBorderIcon sx={{
                    color: "#7F7F7F",
                    fontSize: "2vw"
                }}/>
            </button>
            <p>Me gusta</p>
        </Interactive>
    )
}