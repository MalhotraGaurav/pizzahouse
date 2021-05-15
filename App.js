import { CssBaseline } from "@material-ui/core";
import Header from "./components/Homepage/Header/Header";
import HeaderMenu from "./components/Homepage/HeaderMenu/HeaderMenu";
// import Menu from "./components/Menu";
import FoodMenu from "./components/Homepage/FoodMenu/FoodMenu";
import TodaysOfferSection from "./components/Homepage/TodaysOfferSection/TodaysOfferSection";
import Guide from "./components/Homepage/Guide/Guide";
import MobileSection from "./components/Homepage/MobileSection/MobileSection";
import Footer from "./components/Homepage/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import Carousel from "./components/Homepage/Carousel/Carousel";
import OwrService from "./components/Homepage/Guide/OwrService";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider>
        <CssBaseline />
        <Header />
        <HeaderMenu />
        <Carousel />
        {/* <Menu /> */}
        <main>
          <FoodMenu />
          <TodaysOfferSection />
          <Guide />
          <MobileSection />
          <OwrService />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
