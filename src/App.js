import Footer from "./components/footer";
import Navbar from "./components/nav-bar";
import Newitems from "./components/newitems";
import Reproductions from "./components/reproductions";
import Team from "./components/teams";
import Title from "./components/title";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Reproductions />
      <Newitems />
      <Team />
      <Footer />
    </>

  );
}

export default App;
