import FavoriteIcon from '@mui/icons-material/Favorite';
export function Icon_Like({color}) {
    return (
        <>
            <FavoriteIcon
                sx={{
                    color: { color },
                    fontSize:"1.5vw",
                    background: "1.5vw"
                }}
            />
        </>
    )
}