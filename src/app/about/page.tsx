import { Subpage, SubpageParams } from "../components/subpage/Layout";

export default function About() {
  const params: SubpageParams = {
    title: "About Me"
  };
  
  return (
    <Subpage params={params}>
      <div>
        <p>uwu</p>
      </div>
    </Subpage>
  );
}