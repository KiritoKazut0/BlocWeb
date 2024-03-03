import { Form } from "formik"
import { Inputs } from "../../Datos/Datos.Inputs"
import "../../Registro.css"
import styled from 'styled-components';
import { Buttons_Register } from "../molecules/Buttons-Register"
import { Inputs_Generator } from "../../../../Components/Molecules/Inpusts-Generator";
import { Header_Register } from "../molecules/Header-Register"
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    background-color: #D9D9D9;
    width: 40vw;
    min-height: 90vh;
`;
export function Form_Registro() {
    return (
        <Form className="Form">
            <Div>
                <Header_Register/>
                <Inputs_Generator RegisterInputs={Inputs} />
                <Buttons_Register />
            </Div>
        </Form>
    )
}