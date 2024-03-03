import Title from "../../Atoms/Title";
import Search from "../../Molecules/Search/search";
import Button from "../../Atoms/Button";
import style from  './list.module.css';
import { IconsRemove } from "../../Atoms/IconInteraction";
import SubjectList from "../../Molecules/SubjectList/SubjectList";

export default function List({ title, TextSearch, tipo }) {
    // Array de datos a mapear
    let dataList =[];
    if (tipo ==="1") {
         dataList = [
            { person: "Juan", type: '1', AlternativeText: "Texto alternativo 1", ButtonText: "Botón 1" },
    
            { person: "Juan", type: '1', AlternativeText: "Texto alternativo 1", ButtonText: "Botón 1" },
            { person: "Juan", type: '1', AlternativeText: "Texto alternativo 2", ButtonText: "Botón 2" },
            // Agrega más objetos de datos según sea necesario
        ];
    }else if (tipo ==="2") {
        dataList = [
            { person: "Juan", type: '2', AlternativeText: "Texto alternativo 2", ButtonText: "Botón 2" },
    
            { person: "Juan", type: '2', AlternativeText: "Texto alternativo 2", ButtonText: "Botón 2" },
            { person: "Juan", type: '2', AlternativeText: "Texto alternativo 2", ButtonText: "Botón 2" },
            // Agrega más objetos de datos según sea necesario
        ];
    }else{
        dataList = [
            { person: "Juan", type: '3', AlternativeText: "Texto alternativo 3", ButtonText: "Botón 3" },
    
            { person: "Juan", type: '3', AlternativeText: "Texto alternativo 3", ButtonText: "Botón 3" },
            { person: "Juan", type: '3', AlternativeText: "Texto alternativo 3", ButtonText: "Botón 3" },
            // Agrega más objetos de datos según sea necesario
        ];
    }


    return (
        <div className={style.ContainerList}>
            <div className={style.title}>
                <Title className="title" value={title} />
                <IconsRemove color={"pink[500]"} />
            </div>

            <div className={style.Buscador}>
                <Search TextSearch={TextSearch} />
                <Button>
                    Agregar
                </Button>
            </div>

            <div className={style.list}>
                {/* Mapear el array de datos */}
                {dataList.map((data, index) => (
                    <SubjectList 
                        key={index} 
                        person={data.person} 
                        type={data.type} 
                        AlternativeText={data.AlternativeText} 
                        ButtonText={data.ButtonText}
                    />
                ))}
            </div>
        </div>
    );
}
