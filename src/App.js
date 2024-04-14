import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Form from "./Form";

function App() {
  return (
    <Main>
      <Header title="KALKULATOR WALUTOWY" />
      <Section
        form={
          <Form />
        }
      />
      <Footer />
    </Main>
  );
}

export default App;