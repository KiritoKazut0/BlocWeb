import styled from 'styled-components';
import { TitleDescription } from '../../../../Components/Molecules/Title_Description';
import { CardArticulo } from '../../../../Components/Molecules/Card_Articulo';
import Parrafo from '../../../../Components/Atoms/Parrafos';
const Card = styled.div`
    margin: .5vh 0px;
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #D9D9D9;
`;

const Link = styled.a`
    color: #5089F7 !important;
`;

export function UserArticulos() {
    return (
        <div>
            <Card>
                <TitleDescription title={"Tus Artículos"} description={"Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."} />
                <CardArticulo src={"https://s3-alpha-sig.figma.com/img/5d6e/6a29/9b5f40de81481a35877bdef11f1e68a7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jGRZTw6zBwem0GKFr-Y7jENBpKAIOXRRRRy9J8kPVExzY9PF3wlaYcxTqUlCthVzayx65yfucNOOoc7tUsYfA0dVmnp2VOGJkErWykrJmaOZTY7BGqC8pa2uZ0aSfgyH5hr9DC2hcbYNAeuvFaJee7Igq6mLLvXQSGRiEn-HDM5A9k9eC4OVRKG1a-F6jGmU-Ln9hVeF3PLeZbO7nJJ1zBemu6vbY4U3LNjwamJbEA7~QSvLw2IKvgLzTTlSMALZfRXEXMw2u~7lMO8~jj7BN9KWYfKVrEvVeRMX~aP7lIcO1c5KOsQuhw9hzOPUI1f1heyX5Sprrc81pnwSPd-qEw__"} />
                <br />
                <CardArticulo src={"https://s3-alpha-sig.figma.com/img/a067/8d49/8cf878f6952bf4748d7c77d9c734c033?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1lJrQwt8KWjreLPdivLr6sjPUGMVHQn0hameN7D-YL5N8JjmIwnFG4542p4gX9xDXnoEhYehVQtK9CSBwpfozXN5K2fPSnuxW7thAK17-FxdLQrG2adZUxZAOhBw-bFxdbVlbv3mPzWp~k5MztWVCJXjD6EB7YTDlAwcKxlaDLzMssxxqAGCRr73jDoTAu~Y63LXz0x2VQD-A8NboAQPlL8ScWnVkR5-l3iZa4RpGFSbUPOHxmY1NwYBDaY3wGWKSdDAoy-d~6VSrK~BcFZwKCPWpbp46IUP7wkRZVuL-W~IbtT-HJoMe6aQ7eID3~elZ9bLijvmQ4DbVRJcIJQZQ__"} />
                <br />
                <CardArticulo src={"https://s3-alpha-sig.figma.com/img/a686/c538/42a65a57f1dd67493717cc5d5610f494?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kH4rloKARxijmeVEa5Mq60my9F~YV3U6gnwO3S~KFHIRiO1BKwypQWyehiRQEItb5sAEd6rIm78AYOzg-Ah4QTXYCT6SARcjdmYZ17NU31dlEbjUSHplTJ5uWRwt3ykTtnJdrNRxyRkbZswUE9ziAYW8elM6is6IAT~ZqscaPYkngBF9vyGS1yf6n7ek9alk7u7LSP6hJqYj18yKoO9zl4CuibdUOsvWcvppPltDgwsAfSk86NzDtT7v7Up01yHVmH~yXoDnRXsM5eBH1n1HoulkQ1C0EmxGUBW122i-Y-MKkF3UfEiQVxesEX~uGeSPA08lDHssAXlJfzDx3o5ZlQ__"} />
                <br />
                <Parrafo parrafoArticle>  Quieres ver más contenido como este, da <Link> clic aquí  </Link>o ve a la sección de artículos.</Parrafo>
            </Card>
        </div>

    )
}