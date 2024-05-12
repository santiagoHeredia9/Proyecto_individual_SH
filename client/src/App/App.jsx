import styles from "./App.module.css";
import { Landing } from "../components/Landing/Landing";
import { NavBar } from "../components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { CountryDetail } from "../components/CountryDetail/CountryDetail";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <section className={styles.container}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<CountryDetail />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
