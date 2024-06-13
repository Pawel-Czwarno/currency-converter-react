import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Form from "./Form";
import DateComponent from "./DateComponent/DateComponent";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Header title="KALKULATOR WALUTOWY" />
      <Section>
        <DateComponent />
        <Form />
      </Section>
      <Footer />
    </Main>
  );
}

export default App;