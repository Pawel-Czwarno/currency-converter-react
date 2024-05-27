import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #eee;
    font-size: 15px;
    color: #128b12;
    border-radius: 25px;
    max-width: 700px;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 0.2em;
    box-shadow: 0px 0px 5px 1px #9c9c9c;

@media (max-width: 767px) {
    flex-wrap: wrap;
    }
`;

export const Paragraph = styled.p`
    border-left: 1px solid #128b12;
    padding-left: 10px;
`;

export const StyledLink = styled.a`
    color: #128b12;
    text-decoration: none;
    cursor: pointer;
    border-left: 1px solid #128b12;
    padding-left: 10px;

    &:hover {
        border-bottom: 1px solid #128b12;
    }

    ${({ picture }) => picture && css`
        max-width: 30px;
        max-height: 30px;
    `}
`;