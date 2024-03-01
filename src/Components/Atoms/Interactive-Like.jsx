import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Interactive = styled.div`
position: relative;
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
    transition: .3s ease;
    }
    p{
        font-size: .9vw;
        color: #7F7F7F;
    }
    .Like{
        animation: growShrink 1s ease;
    }
    @keyframes growShrink {
        0% {
            transform:scale(1) translate(0,0);
        }
        50% {
            transform: scale(2) translate(0,-1.5vw) rotate(180deg) rotate(180deg);
        }
        100% {
            transform: scale(1) translate(0,0) rotate(180deg) rotate(180deg) rotate(180deg) rotate(180deg);
        }
    }
`;

export function Interactive_Like() {
    const [active, setActive] = useState(false)
    return (
        <Interactive>
            <button onClick={() => { active ? setActive(false) : setActive(true) }}>
                <FavoriteIcon
                className={active ? "Like" : "" }
                style={{
                    opacity:`${active? "1" : "0"}`,
                    position: "absolute",
                    zIndex: 0,
                }}
                    sx={{
                        color: "red",
                        fontSize: "2vw",
                        transition: "0.3s ease"
                    }}
                />
                <FavoriteBorderIcon 
                sx={{
                    color: "#7F7F7F",
                    fontSize: "2vw",
                    transition: "0.3s ease"
                }} />
            </button>
            <p>Me gusta</p>
        </Interactive>
    )
}