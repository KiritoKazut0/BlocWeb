import styled from 'styled-components';
import { Title_Comunicado } from '../Atoms/Title-Comunicado';
const Contenido = styled.div`
    margin: 1vw 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    span{
        font-size: 1vw;
        font-weight: 500;
        width: calc(100% - 3vw);
        max-height: 15vw;
        overflow: hidden;
        overflow-y: scroll;
        text-align: justify;
        margin:0px  1.5vw;
    }
    span::-webkit-scrollbar {
        width: 0px;
    }
`;
export function Contenido_Comunicado(){
    return(
        <Contenido>
            <Title_Comunicado/>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate iure magni sequi molestiae, laboriosam ab nam blanditiis nostrum, sunt enim. Officiis aliquam saepe delectus perferendis in quidem iure distinctio?
                Voluptas ipsam soluta qui ducimus repellendus tenetur quis iure a obcaecati impedit dolore quam aperiam, quos deleniti consectetur quibusdam consequuntur pariatur non dignissimos nobis. Laboriosam illo quaerat molestiae natus nulla?
                Commodi a omnis ad sint dolorem ipsum obcaecati laboriosam, consectetur adipisci. Vero possimus sequi, voluptatem totam quae, necessitatibus ab veniam cum voluptas veritatis, molestias quia delectus eligendi eos placeat corporis!
                Laborum ipsum harum fuga quos dolorem necessitatibus, blanditiis architecto cumque! Eius, sunt? Delectus labore perferendis at veritatis esse doloribus aspernatur! Accusantium cumque nemo, iste doloribus minima voluptatem amet voluptas placeat!
                Eligendi itaque, harum veritatis, quo perferendis ipsum minus voluptatum voluptates, labore asperiores esse? Itaque quos quidem perferendis, eius voluptas, hic recusandae similique fugiat, odio natus eligendi quod quo iusto doloribus?
                Magnam animi ipsa aut, officia ullam expedita recusandae dignissimos inventore officiis totam ipsum velit, exercitationem necessitatibus pariatur minima aliquam consectetur odit ex. Tempora, id nam libero possimus sequi deleniti et.
                Velit dolore aperiam, pariatur eius ipsum facilis maiores. Dolores necessitatibus, corrupti, exercitationem maiores ipsam voluptas vel veritatis quas delectus cumque repellendus earum totam laboriosam velit cum deleniti commodi ad officiis?
                Consectetur, earum. Eum unde libero reprehenderit nihil fuga, at ducimus id cumque illum asperiores, reiciendis dignissimos et assumenda, quas explicabo! Fuga, molestias. Nemo quis, tempora commodi nisi velit odit. Amet.
                Aspernatur ullam enim vitae nostrum natus dolorem quos voluptate esse laudantium eaque eius unde, quibusdam porro ipsa necessitatibus labore deserunt autem adipisci ut placeat itaque voluptas ad saepe tempora! Molestiae?
                At ratione minima sapiente sint nulla, officia maiores recusandae facilis nam eius? Consequatur reprehenderit cupiditate quod id eum aliquid cumque, quis, est non dolores dolore fuga dolor voluptatibus repellat eligendi!
            </span>
        </Contenido>
    )
}