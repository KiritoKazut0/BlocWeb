import "../Organisms/Home.css"
import Interaction from "./Interaction";
import { IconShare, IconMessage, IconLove } from "../Atoms/IconInteraction";
import Interaction2 from "./Interactions2";
function Articulo() {
    return (
        <>
            <div className="Articulo-Card">
                <div className="Contenido-Articulo">
                    <div>
                        <div>
                            <img src="src/assets/multimedia/img/Perfil-icon.svg" alt="" />
                            <div className="Nombre_fecha">
                                <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                                    Nombre
                                </p>
                                <p style={{ fontWeight: "500", fontSize: ".7rem" }}>
                                    Fecha
                                </p>
                            </div>
                        </div>
                        <button></button>
                    </div>
                    <div className="Articulo">
                        <div className="Img-Articulo">
                            <img src="src/assets/multimedia/img/Rectangle 24.svg" alt="" />
                        </div>
                        <div className="Texto-Articulo">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa neque aperiam consequuntur, similique veritatis sint, earum quibusdam, exercitationem mollitia ipsum soluta placeat illo quis aliquam illum facere qui dolorum.
                                Non repellat quos quaerat a vero aliquid dolore reprehenderit, qui impedit praesentium debitis corrupti placeat? Perspiciatis doloremque obcaecati recusandae nemo quidem maiores, neque exercitationem repudiandae modi quos omnis dolores? Sit.
                                Neque a facere natus eaque suscipit vel! Quam modi autem nisi necessitatibus. Tenetur explicabo doloribus quia et nisi minus est nostrum, corporis qui dolor quibusdam exercitationem eos eum! Maiores, tenetur!
                                Alias voluptas earum exercitationem dolores tenetur quis, sequi illo ut iste distinctio consectetur hic rem dolore nesciunt neque quo vero quod dolorum. Vero sequi magni nihil earum cumque odit maxime!
                                Natus corporis molestias distinctio, dignissimos dolores inventore. Veniam, laudantium. Distinctio, deserunt facere. Eveniet esse ducimus omnis quia praesentium velit enim possimus at earum! Molestiae alias, dolorum repudiandae quidem eveniet sequi?
                            </p>
                        </div>
                    </div>
                    <div className="Info-Interactivo">
                        <div>
                            <IconLove color={"#FF0000"} />
                            <p> 10 reacciones </p>
                        </div>
                        <div>
                            <IconMessage/>
                            <p> 2 Comentarios </p>
                        </div>
                        <div>
                            <IconShare/>
                            <p> 0 Compartir </p>
                        </div>
                    </div>
                </div>
                <div className="Barra-Interactiva">
                    <Interaction2/>
                </div>
            </div>
        </>
    );
}

export default Articulo;