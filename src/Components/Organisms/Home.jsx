import Articulo from "../Molecules/Articulo";
import ArticleComunicado from "../Molecules/Comunicado";
import Nav from "../Molecules/Nav";
import "./Home.css"

function Home() {
    return (
        <>
            <Nav/>
            <div className="Contenido">
                <div className="Cont-cards">

                </div>
                <div className="Cont-Articulos">
                    <Articulo />
                    <ArticleComunicado/>
                </div>
                <div className="Cont-cards">

                </div>
            </div>
        </>
    );
}

export default Home;