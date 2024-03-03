import './Publicacion.css'
import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
export function Publicacion() {
    return (
        <>
            <div className="Publicacion">
                <div className='Column'>
                    <img src="https://s3-alpha-sig.figma.com/img/7ce9/f5f0/727e1ca544fe2435f797c34a264ba6ab?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJKarBTonzX3-N59bYGtFQdjXgpFO6In5FpxOa7AMr6mCPh-2hd6mU7ftsPczvRbP00QxlAqfZJOZO-vLu7zFSZ6qddJkS1-SDkAEHFGlIzSJyZq5VWQSK-W-9e849OKQFkAr88cku1CTWMV1x9ebjr6a6clsJiUBxLsE5egHVFQVtXworgdXqcPALB~ciYfvnst6n5WCy81uRCa4h8DoZTJVv9UQFL5IPqcz7yud1h6ZVpKTSRCd9xNhX4q5CDhS2s0Ms0lDY71hY1E0v7YAsBSbetNLe5zyO-7HqNlKD2pKsP~IbHK61096LLUFUabP1pNs0V3EqkTDzOrVzajIA__" alt="" className='Image' />
                </div>
               <div className="colum-2">
               <div className='Tex-Header'>
                    <p className='Texto'>Agregar Contenido multimedia</p>
                    <CloseIcon className='Icon'></CloseIcon>
                </div>
                <div className='Interior'>
                    <p className='Crear'>Crear Publicación</p>
                    <div className='Foto'>
                        <AddAPhotoIcon className='Camera'></AddAPhotoIcon>
                    </div>
                </div>
                <div className='Pie'>
                    <button className='Boton-Publico'><ExpandMoreIcon className='More'></ExpandMoreIcon><span className='Todo'>Todo público</span> <RemoveRedEyeOutlinedIcon className='Ver'></RemoveRedEyeOutlinedIcon></button>
                    <button className='Boton-Publicar'><span className='Multi'>Publicar Contenido multimedia</span><PanoramaOutlinedIcon></PanoramaOutlinedIcon></button>
                </div>
               </div>
            </div>
        </>
    );
}