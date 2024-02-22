import React from "react";
import './Interaction.css'
import { IconShare, IconMessage, LoveF } from "../Atoms/IconInteraction";

function Interaction2 (){
    return (
        <>
            <div className="interaction-2">
                <nav className="nav-Interaction">
                    <ul className="icon">  <li className="list-icon"><LoveF/> Me gusta</li> </ul>
                    <ul className="icon">
                        <li className="list-icon"> <IconMessage color={"#7F7F7F"} fontSize={"27px"}/> 0 Comentarios</li>
                        <li className="list-icon"><IconShare color={"#7F7F7F"} fontSize={"27px"}/> 0 Compartir</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Interaction2;