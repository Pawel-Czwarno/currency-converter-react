import "./style.css";

const Footer = () => (
    <footer className="footer">
        <p className="footer__element">© Paweł Czwarno 2023</p>
        <p>
            <a className="footer__link" href="mailto:pawel.czwarno@gmail.com">
                Napisz do mnie
            </a>
        </p>
        <p>
            <a href="https://github.com/Pawel-Czwarno" rel="noreferrer noopener" target="_blank">
                <img className="footer__link footer__link--git" src="/github.png" alt="Github_icon"/>
            </a>
        </p>
    </footer>
);

export default Footer;