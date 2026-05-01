import { useEffect } from "react";
import { FirstPage } from "./components/first-page";
import { ForthPage } from "./components/forth-page";
import { LastFooterPage } from "./components/last-footer-page";
import { MusicPage } from "./components/music-page";
import { SecondPage } from "./components/second-page";
import { ThirdPage } from "./components/third-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/top-button";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50, // Փոքրացրու offset-ը, որ շուտ սկսի
      easing: "ease-in-out",
    });

    // Սա շատ կարևոր է React-ի համար. թարմացնում է AOS-ը բեռնվելուց հետո
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <>
      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
      {/* <BackToTop /> */}
    </>
  );
}

export default App;
