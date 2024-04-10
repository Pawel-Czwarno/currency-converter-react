import "./style.css";

const Section = ({ form }) => (
    <section className="section">

        <h2 className="section__title">Wybierz parę walutową, wpisz kwotę i przelicz wartość</h2>
        <p className="section__legend">Kalkulator walutowy jest zgodny z kursem walut z dnia 10 kwietnia 2024 r.</p>
        <div>
            {form}
        </div>

    </section>
);

export default Section;