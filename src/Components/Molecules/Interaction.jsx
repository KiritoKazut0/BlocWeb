import React from "react";
import { IconShare, IconMessage, IconLove } from "../Atoms/IconInteraction";
import './Interaction.css'
function Interaction() {
    return (
        <>
            <div className="interaction">
                <ul className="Interactions-icon">
                    <li className="icons"> <IconLove color={"#FF0000"}/> 10 reacciones  </li>
                    <li className="icons"> <IconMessage/> 2 Comentarios </li>
                    <li className="icons">  <IconShare/> 0 Compartir </li>
                </ul>
            </div>
        </>

    );
}

export default Interaction;