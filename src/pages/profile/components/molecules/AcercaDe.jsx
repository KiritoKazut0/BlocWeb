import styled from 'styled-components';
import { Span } from '../Atoms/Span';
import { Description } from '../atoms/Description';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: justify;
    height: fit-content;
    background-color: #F3F3F3;
    
`;


export function AcercaDe() {
    return (
        <>
            <Container>
                <Span color='#000' size={"1.5vw"} line={"0"} name={"Acerca de mí"} margin={".5vw 1vw"} weigth={"600"} />
                <Description>
                    Figma ipsum component variant main layer. Reesizing undo figjam align inspect.
                    Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow.
                    Scale draft ipsum main background figma selection. Star ellipse comment figma content draft.
                    Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant
                    boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group.
                    Arrow style slice reesizing underline prototype. Comment move underline arrange style slice
                    move reesizing pixel.
                </Description>
            </Container>
        </>
    )
}