import { Image } from "../../../../Components/Atoms/Image";
import styled from 'styled-components';
const ContainerBanner = styled.div`
    width: 100%;
    height: 25vw;
    position: relative;
    background-image: url(https://s3-alpha-sig.figma.com/img/03d2/b78a/64047bbca23349cc730a0f9f8cccd45d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A396bTCYyJ5IDtG-hb-6qOQM-OQ2COHgnN~U-BCKhydNXhLkMxQczved1PJ2JxxrIropIdD-jpnqtwL2WGGOKhKSLMemGhw9Nv29ZQ5hUOS1ZqfQKz9-6eoPuFvDyFbPj6K~2t7NlY9Tff7in9E00ngGJd6-MAgq5Aahip1oeORguruxQEm-KSt9YQjNVp7SiMKeEGoyqSHdf4sxpLCf957NiC3sQ-Mye4iZMCARvxyOfvcNgayg4dq3aFJwivlPog0xnX48-wzEbIIkmVTj6MwD5R3So1-2sgWILXLeG4XoL6WKZwnjeAUrwmhI~oeftg3SOzjWMEONYS~uwMB-pQ__);
    background-size: 100% 80%;
    background-repeat: no-repeat;
    display: flex;
    align-items: end;
    justify-content: start;
   
    img{
        margin-left: 3vw;
      
    }
`;
export function BannerProfile() {
    return (
            <ContainerBanner>
                <Image
                    src={"https://s3-alpha-sig.figma.com/img/7ce9/f5f0/727e1ca544fe2435f797c34a264ba6ab?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJKarBTonzX3-N59bYGtFQdjXgpFO6In5FpxOa7AMr6mCPh-2hd6mU7ftsPczvRbP00QxlAqfZJOZO-vLu7zFSZ6qddJkS1-SDkAEHFGlIzSJyZq5VWQSK-W-9e849OKQFkAr88cku1CTWMV1x9ebjr6a6clsJiUBxLsE5egHVFQVtXworgdXqcPALB~ciYfvnst6n5WCy81uRCa4h8DoZTJVv9UQFL5IPqcz7yud1h6ZVpKTSRCd9xNhX4q5CDhS2s0Ms0lDY71hY1E0v7YAsBSbetNLe5zyO-7HqNlKD2pKsP~IbHK61096LLUFUabP1pNs0V3EqkTDzOrVzajIA__"}
                    width={"13vw"}
                    height={"auto"}
                    borderRadius={"50%"}
                    top={"0"}
                    left={"0"}
                    />
            </ContainerBanner>
    )
}