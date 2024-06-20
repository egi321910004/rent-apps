import avatar1 from "../../../assets/a1.jpg";
import avatar2 from "../../../assets/a2.jpg";
import ServicesSection from "../../../components/Service";
import Noask from "../../../components/NoAsk";
import Header from "../../../components/Navbar/Header";
import Slider from "../../../components/Slider";
import AboutSectionOne from "../../../components/Intro";
import AboutSectionTwo from "../../../components/intro2";
import Footer2 from "../../../components/Footer/Footer2";
import ChatBotComponent from "../../../components/utils/Chatbox";

export default function index() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Slider />
      {/* <Intro /> */}
      <ServicesSection />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Noask />
      <Footer2 />
      <ChatBotComponent />
      {/* <Footer /> */}
    </div>
  );
}
