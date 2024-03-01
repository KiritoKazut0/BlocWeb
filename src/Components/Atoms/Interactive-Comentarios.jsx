import styled from 'styled-components';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const Interactive = styled.div`
    display: flex;
    align-items: center;
    gap: .5vw;
    margin-right: 1.5vw;
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

export function Interactive_Comentarios() {
    return (
        <Interactive>
            <button>
                <ChatBubbleIcon sx={{
                    fontSize: "1.5vw",
                    color: "#7F7F7F"

                }}
                />
            </button>
            <p> 0 Comentarios</p>
        </Interactive>
    )
}