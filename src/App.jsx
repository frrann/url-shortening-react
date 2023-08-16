import "./App.css";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Links from "./components/Links";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Links />
        <GetStarted />
      </main>
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
