import { IconSocial } from "../../../../Components/Molecules/Icons-Social";
import { DetailsPerson } from "../molecules/DetailsPerson";
import { InteresPerson } from "../molecules/InteresPerson";
import { BannerProfile } from "../molecules/BannerProfile";
import './PerfilCard.css'
export function PerfilCard() {
   return (
      <>
         <div className="container-perfil">
            <BannerProfile/>
            <div className="informacion-perfil">
               <DetailsPerson />
               <InteresPerson />
               <IconSocial/>
            </div>
            <IconSocial primary={"true"} sizeIcon={"18px"} />
         </div>
      </>
   )

}
