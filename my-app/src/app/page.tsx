// app/page.tsx or pages/index.tsx

import Header from "./components/Header";
import ProjectPage from "./components/projects/ProjectPage";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      {/* Adding mt-8 adds margin-top between the header and the portfolio section */}
      <main className="container mx-auto mt-8 py-10 text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <p className="text-lg text-gray-600">
            Welcome to my portfolio! Here you will find my projects and skills.
          </p>
          <ProjectPage />
        </div>
      </main>
    </>
  );
}
