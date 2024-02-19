import "../Organisms/Home.css"
function Articulo() {
    return (
        <>
            <div className="Articulo-Card">
                <div className="Contenido-Articulo">
                    <div>
                        <img src="src/assets/multimedia/img/Perfil-icon.svg" alt="" />
                        <div className="Nombre_fecha">
                            <p style={{ fontWeight: "700", fontSize: "1rem"  }}>
                                Nombre
                            </p>
                            <p style={{ fontWeight: "500", fontSize: ".7rem" }}>
                                Fecha
                            </p>
                        </div>
                    </div>
                    <div className="Articulo">

                    </div>
                    <div>

                    </div>
                </div>
                <div className="Barra-Interactiva">

                </div>
            </div>
        </>
    );
}

export default Articulo;