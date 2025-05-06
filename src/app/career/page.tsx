import { Subpage, SubpageParams } from "../components/subpage/Layout";

export default function Career() {
  const params: SubpageParams = {
    title: "Career",
    navigation: {
      next: {
        name: "Projects",
        href: "/projects"
      },
      previous: {
        name: "Education",
        href: "/education"
      }
    }
  };
  
  return (
    <Subpage params={params}>
      <p className="w-80 mx-auto">As of now, I have not had any form of employment.</p>
    </Subpage>
  );
}