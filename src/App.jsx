import { ContactMe } from "./Components/Contact";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ContactMe />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Eris Ismajli. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
