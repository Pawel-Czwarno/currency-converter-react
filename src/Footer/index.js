import { StyledFooter, Paragraph, Link } from "./styled";

const Footer = () => (
    <StyledFooter>
        <Paragraph>© Paweł Czwarno 2023</Paragraph>
        <p>
            <Link href="mailto:pawel.czwarno@gmail.com">
                Napisz do mnie
            </Link>
        </p>
        <p>
            <a href="https://github.com/Pawel-Czwarno" rel="noreferrer noopener" target="_blank">
                <Link as="img" git src="/github.png" alt="Github_icon" />
            </a>
        </p>
    </StyledFooter>
);

export default Footer;