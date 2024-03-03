import { Articulo } from "../../Components/Organisms/Articulo";
import { Articulo_Comunicado } from "../../Components/Organisms/Articulo-Comunicado";
import { Articulo_Evento } from "../../Components/Organisms/Articulo-Evento";
import { Header } from "../../Components/Organisms/Header";
import { User_Articulos } from "./components/organism/User-Articulos";
import { DatePerson } from "./components/organism/DatePerson";
import "./Profile.css"
import { PerfilCard } from "./components/organism/PerfilCard";
export function Profile() {
    return (
        <>
            <Header />
            <div className="Content">
                <div className="Cont-Arti">
                    <PerfilCard />
                    <DatePerson/>
                    <Articulo />
                    <Articulo_Evento />
                    <Articulo_Comunicado />
                </div>
                <User_Articulos />

                
            </div>
        </>
    );
}