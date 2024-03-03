import P from "../../Atoms/P";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import { IconsRemove } from "../../Atoms/IconInteraction";
import style from './Notification.module.css';

export default function Notification({value, type, text}) {
  return (
    <div className={style.ContainerNotification}>
        <div className={style.title}>
        <Title className={"title"} value={value}/>
        <IconsRemove Color='black'/>
        </div>

        <P textP={text}/>
    <div className={style.buttons}>
    {type === "1" && <Button color="#E5A810" textColor="white"> Bloquear Usuario</Button>}
        {type === "2" && <Button color="#C60505" textColor="white"> Eliminar </Button>}
        <Button >Cancelar</Button>
    </div>
  
    </div>
  )
}
