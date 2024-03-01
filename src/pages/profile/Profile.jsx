import { Articulo } from "../../Components/Organisms/Articulo";
import { Articulo_Comunicado } from "../../Components/Organisms/Articulo-Comunicado";
import { Articulo_Evento } from "../../Components/Organisms/Articulo-Evento";
import { Header } from "../../Components/Organisms/Header";
import "./Profile.css"
export function Profile() {
    return (
        <>
            <Header/>
            <div className="Content">
                <div className="Cont-Arti">
                    <Articulo />
                    <Articulo_Evento/>
                    <Articulo_Comunicado/>
                </div>
                <div className="Card">
                </div>
            </div>
        </>
    );
}