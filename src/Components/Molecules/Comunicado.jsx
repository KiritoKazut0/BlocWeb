import React from "react";
import Img from "../Atoms/Img";
import Title from "../Atoms/Title";
import Span from "../Atoms/Span";
import IconMore from "../Atoms/IconMore";
import Parrafo from "../Atoms/Parrafos";
import Interaction from "./Interaction";
import Interaction2 from "./Interactions2";
import './Comunicado.css'

function ArticleComunicado() {
    return (
        <>
            <article className="article">
                <div className="header--article">
                    <div className="perfil-details">
                        <Img iconImage src="https://s3-alpha-sig.figma.com/img/7568/3fd5/7261c2ae940abab762a6e0130b36b3a9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EC-fc0MDwq6Zq6ArJ4-qRuR0pfkt-tpAkiZrJHLczDfkjKhrK7DFQTF3qkg1F~eT6oIdCnymvmae7TfDYXMiYl~bG-A-k8vK2lGvjxpCOoNMXdnE~hJ4vUJ6CAn4L6kMa~Bci248hIBxTLnohoTEwiB5RxcAjf~Rn92iiuajEcnsy6CdOI-o1f3aNCfbNKuJPOfjg4Xk7FazWtkL1O4Z0hxOy066q9p2NIuGiGFUGTKWWbzUcsca2kFoLgYRuTItb5mMBBmblIHznGzSNYv1OdX9X1z~NAyZG4Uxe-V98Hs7ShFG2wytwL4CVsxsURd-EKQa-yC8vlwSQ6Y9orys8w__" />
                        <ul className="perfil-details-date">
                            <li> <Span name> Joan Rosenbaum </Span> </li>
                            <li className="hrs"> 4 hrs </li>
                        </ul>
                    </div>
                    <ul className="icon-more"> <li><IconMore /></li></ul>
                </div>

                <Title value={"COMUNICADO IMPORTANTE"} className={"title"} />
                <Parrafo parrafoArticle> Figma ipsum component variant main layer. Prototype thumbnail opacity outline select image list invite
                    selection scale. Bold clip follower overflow align inspect. Star star asset team arrow pixel pixel vector team.
                    Pen object background overflow draft text. Clip draft hand flatten selection connection flows. Editor undo italic
                    blur union arrow union strikethrough editor. Image clip thumbnail flatten select pencil plugin overflow.
                    Overflow italic star distribute object. Flows editor fill hand align rectangle create duplicate pencil style.
                    Library content component italic group. Pixel content rectangle connection vector outline figma follower. Main
                    flatten rectangle fill overflow share. Shadow style editor overflow edit selection object undo. </Parrafo>
                <Interaction />
                <Interaction2 />



            </article>
        </>
    );

}

export default ArticleComunicado;
