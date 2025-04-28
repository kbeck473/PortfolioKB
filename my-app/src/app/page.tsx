import Header from "./components/Header";
import Greeting from "./components/greeting";
import Footer from "./components/Footer"
import HomeTabs from "./components/HomeTabs";  // import the new tab component

export default function Home() {
  return (
    <>
      <Header />
      <Greeting />
      <main className="container mx-auto mt-8 py-10 text-center">
        <HomeTabs />
      </main>
      <Footer />
    </>
  );
}
