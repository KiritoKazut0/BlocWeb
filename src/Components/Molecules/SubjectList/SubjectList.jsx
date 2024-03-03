import { IconsMinus } from "../../Atoms/IconInteraction";
import Button from "../../Atoms/Button";
import style from './SubjectList.module.css'

export default function SubjectList({ person, type, AlternativeText, ButtonText }) {
  return (
    <div className={style.ContainerSubjectList}>
      <a>
        {person}
      </a>
      <div className={style.options}>
      {type === "1" && <IconsMinus />}
      {type === "2" &&      <>
          <IconsMinus />
          <Button icons={true}>{ButtonText}</Button>
        </>
}
      {type === "3" && <a>{AlternativeText}</a>}
      </div>

    </div>
  );
}
