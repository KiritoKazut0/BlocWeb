import { IconSocial } from "../Atoms/Icons-social";
import { DetailsPerson } from "../Molecules/DetailsPerson";
import { InteresPerson } from "../Molecules/InteresPerson";
import { BannerProfile } from "../Molecules/BannerProfile";



export function PerfilCard() {
   return (
      <>
         <div className="container-perfil">
            <BannerProfile width={"185px"} height={"185px"} top={"52%"} left={"8%"} />
            <div className="informacion-perfil">
               <DetailsPerson />
               <InteresPerson />
               <IconSocial primary={"true"} sizeIcon={"18px"} />
            </div>

         </div>
      </>
   )

}
