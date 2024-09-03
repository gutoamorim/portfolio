import { Header } from "./components/header";
import { Home } from "./components/pages/home";
import { Skils } from "./components/pages/skils";
import { Projects } from "./components/pages/projects";
import { Contact } from "./components/pages/contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skils />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
