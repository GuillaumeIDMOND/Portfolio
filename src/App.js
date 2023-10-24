import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { useTranslation} from 'react-i18next';
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Portfolio from "./scenes/Portfolio";
import Contact from "./scenes/Contact";
import LineGradient from "./components/LineGradient";

function App() {
  const {i18n}= useTranslation();
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
      const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 useEffect (() => {
  const lng = navigator.language;
  i18n.changeLanguage(lng);
 }, [i18n]);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} 
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          )}
          <Landing setSelectedPage={setSelectedPage} />
      </div>
    <LineGradient />
          <div className="w-5/6 mx-auto">
            <MySkills />
          </div>
    <LineGradient />
          <div className="w-5/6 mx-auto ">
            <Portfolio />
          </div>
    <LineGradient />
          <div className="w-5/6 mx-auto">
            <Contact />
          </div>
    </div>
     
  );
}

export default App;