import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='font-body'>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Team />
      <Footer />
    </main>
  );
}
