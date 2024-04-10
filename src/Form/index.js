import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Wybierz parę walutową</legend>
            <p>
                <label>
                    <span className="form__label">Przelicz z:</span>
                    <select className="form__input" disabled>
                        <option value="pln" selected>Złoty (PLN)</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__label">Przelicz na:</span>
                    <select className="form__input">
                        <option value="$" selected>Dolar amerykański ($)</option>
                        <option value="€">Euro (€)</option>
                        <option value="₴">Hrywna ukraińska (₴)</option>
                        <option value="£">Funt brytyjski (£)</option>
                        <option value="CHF">Frank szwajcarski (CHF)</option>
                    </select>
                </label>
            </p>
        </fieldset>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Wpisz kwotę i otrzymaj wynik</legend>
            <p>
                <span className="form__label">Wpisz kwotę do przeliczenia*:</span>
                <input type="number" className="form__input" step="0.01" required />
            </p>
            <p>
                <span className="form__label">Kwota po przeliczeniu:</span>
                <input className="form__input form__input-readonly" readonly />
            </p>
        </fieldset>
        <p>
            <button className="form__button">Przelicz</button>
        </p>
        <p>
            <button className="form__button" type="reset">Wyczyść formularz</button>
        </p>
    </form>
);

export default Form;