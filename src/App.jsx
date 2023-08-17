import "./App.css";

import Header from "./components/layout/Header";
import Intro from "./components/layout/Intro";
import Links from "./components/links/Links";
import Banner from "./components/layout/Banner";
import Footer from "./components/layout/Footer";
import Attribution from "./components/layout/Attribution";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Links />
        <Banner />
      </main>
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
