import Articulo from "../Molecules/Articulo";
import "./Home.css"

function Home(){
    return(
        <>
            {/* Header */}
            <div className="Contenido">
                <div className="Cont-cards">

                </div>
                <div className="Cont-Articulos">
                    <Articulo/>
                </div>
                <div className="Cont-cards">

                </div>
            </div>
        </>
    );
}

export default Home;