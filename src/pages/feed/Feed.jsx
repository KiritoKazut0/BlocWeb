import Parrafo from "../../Components/Atoms/Parrafos";
import Articulo from "../../Components/Molecules/Articulo";
import ArticleComunicado from "../../Components/Molecules/Comunicado";
import Nav from "../../Components/Molecules/Nav";
import "./Home.css"

function Home() {
    return (
        <>
            <Nav/>
            <div className="Contenido">
                <div className="Cont-Cards-Uno">

                </div>
                <div className="Cont-Articulos">
                    <Articulo />
                    <ArticleComunicado/>
                </div>
                <div className="Cont-Card-Dos">
                    <Parrafo ></Parrafo>
                </div>
            </div>
        </>
    );
}

export default Home;