import styled from 'styled-components';
import Parrafo from "../Atoms/Parrafos";
import { Span } from '../Atoms/Span';
const Container = styled.div`
    width: 50%;
    text-align: justify;
    height: 100%;
    background-color: #F3F3F3;
`;


export function AcercaDe() {
    return (
        <>
            <Container>
                <Span color='#000' size={"18px"} line={"21.78px"} name={"Acerca de mí"} /> 
                <br />
                <Parrafo> Figma ipsum component variant main layer. Reesizing undo figjam align inspect.
                    Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow.
                    Scale draft ipsum main background figma selection. Star ellipse comment figma content draft.
                    Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant
                    boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group.
                    Arrow style slice reesizing underline prototype. Comment move underline arrange style slice
                    move reesizing pixel.</Parrafo>
            </Container>
        </>
    )
}