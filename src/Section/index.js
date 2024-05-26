import { StyledSection, Title, Legend } from "./styled";

const Section = ({ children }) => (
    <StyledSection>
        <div>
            {children[0]}
        </div>
        <Title>
            Wybierz parę walutową, wpisz kwotę i przelicz wartość
        </Title>
        <Legend>
            Kalkulator walutowy jest zgodny z kursem walut z dnia 10 kwietnia 2024 r.
        </Legend>
        <div>
            {children[1]}
        </div>
    </StyledSection>
);

export default Section;