import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    text-align: center;

    @media (max-width: 767px) {
        overflow: auto;
    }

    @media (max-width: 400px) {
        fieldset {
            margin: 5px;
        }

        input {
            width: 100px;
            padding: 5px;
        }
    }
`;

export const Legend = styled.legend`
    text-align: left;
    padding: 5px 10px;
    background-color: #f7fdf2;
    border: solid;
    border-color: #128b12;
    border-radius: 10px;
    border-width: 1px;
`;

export const Fieldset = styled.fieldset`
    margin: 20px;
    border-radius: 10px;
    border-color: #128b12;
    border-width: 1px;
    text-align: left;
    background-color: #f7fdf2;
    box-shadow: 0px 0px 5px 1px #9c9c9c;

    @media (max-width: 400px) {
        margin: 5px;
    }
`;

export const Flex = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Input = styled.select`
    background-color: #e1fdf4;
    color: #128b12;
    padding: 10px;
    width: 250px;
    border-radius: 10px;

    ${({ readOnly }) => readOnly && css`
        background-color: #7ffdd5;
        font-weight: bold;
    `}

    @media (max-width: 400px) {
        width: 100px;
        padding: 5px;
    }
`;

export const Button = styled.button`
    background-color: #e1fdf4;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color: #128b12;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #9c9c9c;

    &:hover {
        background-color: #78ffd4;
    }
`;