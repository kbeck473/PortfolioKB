// app/page.jsx

import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import HomeTabs from "./components/HomeTabs";
import Hero from "./components/HeroSection.jsx";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="w-full sm:max-w-7xl mx-auto px-0 sm:px-6 mt-4 sm:mt-8 py-10 text-center">
        <HomeTabs />
      </main>
      <Footer />
    </>
  );
}
