// app/page.tsx or pages/index.tsx

import Header from "./components/Header";
import ProjectPage from "./components/projects/projectPage";
import Greeting from "./components/greeting";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      {/* Adding mt-8 adds margin-top between the header and the portfolio section */}
      <main className="container mx-auto mt-8 py-10 text-center">
        <div className="flex flex-col gap-6">
          <Greeting />
          
          <ProjectPage />
        </div>
      </main>
    </>
  );
}
