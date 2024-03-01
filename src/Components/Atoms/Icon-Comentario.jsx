import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
export function Icon_Comentario({color}) {
    return (
        <>
            <ChatBubbleIcon sx={{
                fontSize: "1.5vw",
                color: { color }
            }}
            />
        </>
    )
}