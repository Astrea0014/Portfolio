import { EducationItem } from "../components/general/EducationItem";
import { Subpage, SubpageParams } from "../components/subpage/Layout";

export default function Education() {
  const params: SubpageParams = {
    title: "Education",
    navigation: {
      next: {
        name: "Career",
        href: "/career"
      },
      previous: {
        name: "About Me",
        href: "/about"
      }
    },
    className: "w-full gap-8 flex flex-row flex-wrap items-center justify-center"
  };
  
  return (
    <Subpage params={params}>
      <EducationItem
      study="Systems Development"
      name="LBS Kreativa Gymnasiet"
      location="Stockholm Södra"
      timespan="2022-2025"
      logo="/file.svg"
      alt="Logotype of LBS Kreativa Gymnasiet"
      description="This educator provided a diverse technological education covering many parts of hardware and software, as well as different kinds of applications and web technologies."/>
      
      <EducationItem
      study="Information Technology"
      name="Kungliga Tekniska Högskolan"
      location="Valhallavägen Campus"
      timespan="2025-2030"
      logo="/globe.svg"
      alt="Logotype of the Swedish Royal Institute of Technology"
      description="This educator provided courses related to information and communication technologies relevant for devloping systems that revolve around systems of different natures communicating and exchanging information."/>
    </Subpage>
  );
}