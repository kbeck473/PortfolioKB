// app/page.tsx or pages/index.tsx

import Header from "./components/Header";
import ProjectsPage from "./components/projects/ProjectPage";
import Greeting from "./components/greeting";
import Footer from "./components/Footer"
import "./globals.css";

import EducationsPage from "./components/Education/EcucationPage";
import ExperiencesPage from "./components/experience/ExperiencesPage"

export default function Home() {
  return (
    <>
      <Header />
      <Greeting/>
      
      <main className="container mx-auto mt-8 py-10 text-center">
        <div className="flex flex-col gap-6 bg-">
          <EducationsPage/>
          <ExperiencesPage/>
          <ProjectsPage />
        </div>
      </main>

      <Footer/>
    </>
  );
}
