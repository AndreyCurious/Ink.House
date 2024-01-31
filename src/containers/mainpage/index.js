import { useRef } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import Newitems from "../../components/newitems";
import Reproductions from "../../components/reproductions";
import Team from "../../components/teams";
import Title from "../../components/title";
import ScrollBtn from "../../components/scrollbtn";

function Mainpage() {
  const reproductions = useRef(null);
  const newItems = useRef(null);
  const aboutUs = useRef(null);
  const handleScroll = ref => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop
    });
  };
  return (
    <>
      <Navbar scrollTo={handleScroll} reproductionsRef={reproductions} newitemsRef={newItems} aboutUsRef={aboutUs} />
      <Title />
      <Reproductions refItem={reproductions} />
      <Newitems refItem={newItems} />
      <Team refItem={aboutUs} />
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default Mainpage;