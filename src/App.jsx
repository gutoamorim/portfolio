import { Header } from "./components/header";
import { Home } from "./components/pages/home";
import { Skils } from "./components/pages/skils";
import { Projects } from "./components/pages/projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skils />
      <Projects />
    </>
  );
}

export default App;
