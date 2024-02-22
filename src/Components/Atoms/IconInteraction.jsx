import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function IconMessage ({color, fontSize}){
    return (
        <>
            <ChatBubbleIcon sx={{ 
                fontSize: {fontSize},
                color: {color}
            
            }}
                />
        </>
    );
}


function IconShare ({color, fontSize}){
    return (
        <>
            <ShareIcon sx={{ fontSize: {fontSize},
            color: {color}

            }}/>
        </>
    );
}


function IconLove ({color, fontSize}){
    return (
        <>
            <FavoriteIcon
                sx={{
                    color: {color},
                    fontSize: "20px",
                    color: {color},
                    background: {fontSize}
                }}
            />
        </>
    )
}

function LoveF (){
    return (<> <FavoriteBorderIcon sx={{
            color: "#7F7F7F",
            fontSize: "28px"
    }}/></>)
}

export {
    IconShare, 
    IconMessage,
    IconLove,
    LoveF
};