import Input from "../../Atoms/input"
import IconSearch from "../../Atoms/IconSearch";
import style from './search.module.css'

export default function search({TextSearch}) {
  return (
    <div className={style.Buscador}>
        <IconSearch />
        <Input text={TextSearch} />
    </div>
  )
}
