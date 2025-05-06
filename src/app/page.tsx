import { Header } from "./components/general/Header";
import { NavButtonMobile, NavInteractibleParams } from "./components/navigation/NavButtonMobile";
import "./DotBounceAnimation.css";

export default function Home() {
  const aboutMeParams: NavInteractibleParams = {
    href: "/about",
    label: "About Me",
    icon: "/file.svg",
    alt: "A file"
  };

  const educationParams: NavInteractibleParams = {
    href: "/education",
    label: "Education",
    icon: "/window.svg",
    alt: "An application window"
  };

  const careerParams: NavInteractibleParams = {
    href: "/career",
    label: "Career",
    icon: "/globe.svg",
    alt: "A globe"
  };

  const projectParams: NavInteractibleParams = {
    href: "/projects",
    label: "Projects",
    icon: "/file.svg",
    alt: "A file"
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

        <p className="max-w-80 sm:max-w-lg md:max-w-2xl lg:max-w-4xl m-auto mt-5 text-center sm:text-left">
          This is a website made by me, Douglas Lyman, to show who I am and what I can do.
          Below you can find information about me, my education, my career and previous projects.
        </p>

        <nav className="p-8 flex flex-row flex-wrap justify-center items-center gap-8">
          <NavButtonMobile params={aboutMeParams}/>
          <NavButtonMobile params={educationParams}/>
          <NavButtonMobile params={careerParams}/>
          <NavButtonMobile params={projectParams}/>
        </nav>
      </main>
    </>
  );
}
