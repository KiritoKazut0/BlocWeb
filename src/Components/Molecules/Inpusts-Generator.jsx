
import styled from 'styled-components';
import { Input_Register } from "../Atoms/Input-Register";
const Div = styled.div`
    width: 60%;
    label{
        font-size: 1vw;
        color: #929292;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 0.7vw;
    }
    input::placeholder{
        color: #CCCCCC;
    }
`;
export function Inputs_Generator({  RegisterInputs }) {
    return (
        <Div>
            {
                RegisterInputs.fields.map((Date, Index) => {
                    return (
                        <Input_Register date={Date} index={Index}/>
                    )
                })
            }
        </Div>
    )
}