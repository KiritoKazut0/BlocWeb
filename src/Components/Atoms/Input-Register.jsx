import { ErrorMessage, Field, useFormikContext } from 'formik';
import styled from 'styled-components';
import MessageError from './MessageError';
const Div = styled.div`
    gap: .5vw;
    margin-bottom: 1vw;
    input{
        background-color: #FFFFFF;
        border: .1vw solid #C5C5C5;
        outline: .1vw solid transparent;
        transition: .3s ease-in-out;
        border-radius: .3vw;
    }
    input:focus{
        outline: .1vw solid #6e6e6e;
        border: .1vw solid #6e6e6e;
    }
    input:hover{
        outline: .1vw solid #6e6e6e;
        border: .1vw solid #6e6e6e;
    }
    input::placeholder{
        font-size: ${props => props.Password === ".3vw" ? "4vw" : "1vw"};
        letter-spacing: ${props => props.Password};
        transform: ${props => props.Password === ".3vw" ? "translate(0,.75vw)" : "translate(0,0)"};
    }
`;
export function Input_Register({ date, index }) {
    const { errors } = useFormikContext();
    return (
        <Div key={index} Password={date.type === "password" ? ".3vw" : " 0px"}>
            <label htmlFor={date.name}> {date.input} </label>
            <Field type={date.type} id={date.name} name={date.name} placeholder={date.placeholder} />
            <ErrorMessage name={date.name} component={() => (<MessageError message={errors[date.name]} />)} />
        </Div>
    )
}