import HeroPage from "@/components/HeroPage/HeroPage";
import AboutPage from "@/components/AboutPage/AboutPage";
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
      <HeroPage />
      <AboutPage />
    </div>
  );
};

export default Home;