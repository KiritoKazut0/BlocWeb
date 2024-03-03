import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

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

function IconsRemove ({Color}){
    return (
        <>
           <ClearIcon 
             sx={{
                color:{Color}
            }}
           />
        </>
    )
}

function IconsMinus ({color}) {
    return (
        <>
        <RemoveCircleOutlineIcon 
        sx={{
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
    LoveF,
    IconsMinus,
    IconsRemove
};