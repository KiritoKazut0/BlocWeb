import ShareIcon from '@mui/icons-material/Share';
export function Icon_Share({color, Size}){
    return(
        <>
            <ShareIcon sx={{
                fontSize: "1.5vw",
                color: { color }
            }} />
        </>
    )
}