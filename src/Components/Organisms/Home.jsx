import Parrafo from "../Atoms/Parrafos";
import Articulo from "../Molecules/Articulo";
import ArticleComunicado from "../Molecules/Comunicado";
import Nav from "../Molecules/Nav";
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