import { useState } from "react";
import { currencies } from "./currencies";
import { StyledForm, Legend, Fieldset, Container, Input, Button } from "./styled";

const Form = () => {
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
      <StyledForm
         onSubmit={onSubmit}
         result={result}
      >
         <Fieldset>
            <Legend>Wybierz parę walutową</Legend>
            <p>
               <Container>
                  <span>Przelicz z:</span>
                  <Input disabled defaultValue="pln">
                     <option value="pln">Złoty (PLN)</option>
                  </Input>
               </Container>
            </p>
            <p>
               <Container>
                  <span>Przelicz na:</span>
                  <Input
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
                  </Input>
               </Container>
            </p>
         </Fieldset>
         <Fieldset>
            <Legend>Wpisz kwotę i otrzymaj wynik</Legend>
            <Container as="p">
               <span>Wpisz kwotę do przeliczenia*:</span>
               <Input
                  as="input"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  type="number"
                  step="0.01"
                  min="0"
                  required
               />
            </Container>
            <Container as="p">
               <span>Kwota po przeliczeniu:</span>
               <Input
                  as="input"
                  value={result ? result.finalAmount : ''}
                  readOnly
               />
            </Container>
         </Fieldset>
         <p>
            <Button>Przelicz</Button>
         </p>
      </StyledForm>
   );
};

export default Form;