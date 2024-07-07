import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Form from "./Form";
import DateComponent from "./DateComponent/DateComponent";

function App() {
  return (
    <Main>
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