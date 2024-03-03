import { IconSocial } from "../../../../Components/Atoms/Icons-social";
import { DetailsPerson } from "../../../../Components/Molecules/DetailsPerson";
import { InteresPerson } from "../../../../Components/Molecules/InteresPerson";
import { BannerProfile } from "../../../../Components/Molecules/BannerProfile";
import './PerfilCard.css'


export function PerfilCard() {
   return (
      <>
         <div className="container-perfil">
            <BannerProfile width={"185px"} height={"5vw"} top={"52%"} left={"8%"} />

            <div className="informacion-perfil">
               <DetailsPerson />
               <InteresPerson />
               <IconSocial primary={"true"} sizeIcon={"18px"} />
            </div>

         </div>
      </>
   )

}
