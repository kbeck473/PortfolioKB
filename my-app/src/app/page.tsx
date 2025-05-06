
import Nav from "./components/Navbar";
import Footer from "./components/Footer"
import HomeTabs from "./components/HomeTabs";  // import the new tab component

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-7xl mx-auto px-6 mt-8 py-10 text-center">
        <HomeTabs />
      </main>
      <Footer />
    </>
  );
}
