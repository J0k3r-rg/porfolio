import AboutMe from "./UI/components/aboutme/AboutMe";
import Habilities from "./UI/components/habilities/Habilities";
import ProjectHome from "./UI/components/projectshome/ProjectHome";


export default function Home() {
  return (
    <main className="m-auto w-9/12 mt-10 flex flex-col gap-8">

      <AboutMe />

      <Habilities />

      <ProjectHome />
      
    </main>
  );
}