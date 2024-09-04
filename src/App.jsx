import { Header } from "./components/header";
import { Home } from "./components/pages/home";
import { Skils } from "./components/pages/skils";
import { Projects } from "./components/pages/projects";
import { Contact } from "./components/pages/contact";
import { Footer } from "./components/footer";
import { ToTop } from "./components/to-top";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skils />
      <Projects />
      <Contact />
      <Footer />
      <ToTop />
    </>
  );
}

export default App;
