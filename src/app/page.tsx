import { Header } from "./components/home/header/Header";
import { MobileNavBox, NavInteractibleParams } from "./components/navigation/Navigation";
import "./DotBounceAnimation.css";

export default function Home() {
  const aboutMeParams: NavInteractibleParams = {
    href: "/",
    label: "About Me",
    icon: "/file.svg",
    alt: "About Me icon"
  };

  const educationParams: NavInteractibleParams = {
    href: "/",
    label: "Education",
    icon: "/window.svg",
    alt: "Education icon"
  };

  const careerParams: NavInteractibleParams = {
    href: "/",
    label: "Career",
    icon: "/globe.svg",
    alt: "Career icon"
  };

  const projectParams: NavInteractibleParams = {
    href: "/",
    label: "Projects",
    icon: "/file.svg",
    alt: "Projects icon"
  };
  
  return (
    <>
      <Header/>
      <main>
        <h2 className="text-4xl font-bold mt-5 text-center">
          Welcome
          <span className="dot">.</span>
          <span className="dot animation-delay-[0.2s]">.</span>
          <span className="dot animation-delay-[0.4s]">.</span>
        </h2>

        <p className="w-80 m-auto mt-5 text-center md:text-left">
          This is a website made by me, Douglas Lyman, to show who I am and what I can do.
          Below you can find information about me, my education, my career and previous projects.
        </p>

        <nav className="p-8 flex flex-col justify-center items-center gap-8">
          <MobileNavBox params={aboutMeParams}/>
          <MobileNavBox params={educationParams}/>
          <MobileNavBox params={careerParams}/>
          <MobileNavBox params={projectParams}/>
        </nav>
      </main>
    </>
  );
}
