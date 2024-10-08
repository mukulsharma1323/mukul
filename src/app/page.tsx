import Footer from "./components/footer";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}
