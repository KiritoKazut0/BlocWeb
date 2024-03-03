
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';

export function IconEdit ({position, tamaño, top, left}){
    return (
        <>
            <BrushRoundedIcon sx={{
                position: {position},
                fontSize: "40px",
                top: {top},
                left:{left},
                background: "#7F7F7F",
                color: "#FFFFFF",
                borderRadius: "100px",
                width: "30px",
                height: "30px",
                padding: "5px",
                objectFit: "none !important"
            }}/>
        </>
    );
}