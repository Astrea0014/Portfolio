// the git thingies and maybe larger containers explaining about the project.

import { GithubProjectItem } from "../components/general/GithubProjectItem";
import { Subpage, SubpageParams } from "../components/subpage/Layout";

export default function Projects() {
  const params: SubpageParams = {
      title: "Projects",
      navigation: {
        previous: {
          name: "Career",
          href: "/career"
        }
      },
      className: "flex flex-row flex-wrap gap-4 justify-center items-center"
    };
    
    return (
      <Subpage params={params}>
        <GithubProjectItem repositoryName="Astrea0014/Portfolio"/>
        <GithubProjectItem repositoryName="Astrea0014/Portfolio"/>
        <GithubProjectItem repositoryName="Astrea0014/Portfolio"/>
      </Subpage>
    );
}