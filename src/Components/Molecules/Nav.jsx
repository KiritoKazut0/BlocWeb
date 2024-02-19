import React from "react";
import Img from "../Atoms/Img";
import Button from "../Atoms/Button";
import IconSearch from "../Atoms/IconSearch";
import IconSettings from "../Atoms/iconSettings";
import './Nav.css'

function Nav() {
    return (
        <>
            <nav className="nav">
                <ul className="list">
                    <li className="img"> <Img img src='https://i.imgur.com/EdH0Gr8.png' /></li>
                    <li className="search"> 
                    <IconSearch></IconSearch>
                    <input placeholder="Buscar"></input>
                    </li>
                    <li> Inicio </li>
                    <li> Grupos </li>
                    <li> Articulos </li>
                    <li> Comunicados </li>
                </ul>

                <ul className="list_2">
                    <li className="buttons-icon"> <Button icons perfil> Mi perfil </Button> </li>
                    <li className="buttons-icon"> <Button settings > <IconSettings /> </Button> </li>
                </ul> 

            </nav>
        </>
    );
}

export default Nav;