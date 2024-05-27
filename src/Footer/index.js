import { StyledFooter, Paragraph, StyledLink } from "./styled";

const Footer = ({ picture }) => (
    <StyledFooter>
        <Paragraph>© Paweł Czwarno 2023</Paragraph>
        <p>
            <StyledLink href="mailto:pawel.czwarno@gmail.com">
                Napisz do mnie
            </StyledLink>
        </p>
        <p>
            <a href="https://github.com/Pawel-Czwarno" rel="noreferrer noopener" target="_blank">
                <StyledLink
                    as="img"
                    $picture={picture}
                    src="/github.png"
                    alt="Github_icon"
                />
            </a>
        </p>
    </StyledFooter>
);

export default Footer;