import { Articulo } from "../../Components/Organisms/Articulo";
import { Articulo_Comunicado } from "../../Components/Organisms/Articulo-Comunicado";
import { Articulo_Evento } from "../../Components/Organisms/Articulo-Evento";
import "./Feed.css"

function Home() {
    return (
        <>
            <div className="Contenido">
                <div className="Cont-Cards-Uno">

                </div>
                <div className="Cont-Articulos">
                    <Articulo />
                    <Articulo_Evento/>
                    <Articulo_Comunicado/>
                </div>
                <div className="Cont-Card-Dos">
                </div>
            </div>
        </>
    );
}

export default Home;