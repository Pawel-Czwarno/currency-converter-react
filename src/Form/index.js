import { useState } from "react";
import "./style.css";

const Form = () => {
   const currencies = [
      {
         index: "$",
         name: "Dolar amerykański",
         rate: 3.99,
      },
      {
         index: "€",
         name: "Euro",
         rate: 4.26,
      },
      {
         index: "₴",
         name: "Hrywna",
         rate: 0.10,
      },
      {
         index: "£",
         name: "Funt brytyjski",
         rate: 5.01,
      },
      {
         index: "CHF",
         name: "Frank szwajcarski",
         rate: 4.38,
      },
   ];
   const [currency, setCurrency] = useState(currencies[0].index);
   const [amount, setAmount] = useState("");
   const [result, setResult] = useState();

   const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
   };

   const calculateResult = (currency, amount) => {
      const rate = currencies
         .find(({ index }) => index === currency)
         .rate;

      setResult({
         finalAmount: (amount / rate).toFixed(2),
      });
   };

   return (
      <form
         className="form"
         onSubmit={onSubmit}
         result={result}
      >
         <fieldset className="form__fieldset">
            <legend className="form__legend">Wybierz parę walutową</legend>
            <p>
               <label className="form__flex">
                  <span>Przelicz z:</span>
                  <select className="form__input" disabled defaultValue="pln">
                     <option value="pln">Złoty (PLN)</option>
                  </select>
               </label>
            </p>
            <p>
               <label className="form__flex">
                  <span>Przelicz na:</span>
                  <select
                     className="form__input"
                     value={currency}
                     onChange={({ target }) => setCurrency(target.value)}
                  >
                     {currencies.map((currency => (
                        <option
                           key={currency.index}
                           value={currency.index}
                        >
                           {currency.name}
                        </option>
                     )))}
                  </select>
               </label>
            </p>
         </fieldset>
         <fieldset className="form__fieldset">
            <legend className="form__legend">Wpisz kwotę i otrzymaj wynik</legend>
            <p className="form__flex">
               <span>Wpisz kwotę do przeliczenia*:</span>
               <input
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  type="number"
                  className="form__input"
                  step="0.01"
                  required
               />
            </p>
            <p className="form__flex">
               <span>Kwota po przeliczeniu:</span>
               <input
                  value={result ? result.finalAmount : ''}
                  className="form__input form__input-readonly"
                  readOnly
               />
            </p>
         </fieldset>
         <p>
            <button className="form__button">Przelicz</button>
         </p>
      </form>
   );
};

export default Form;