import Image from "next/image";
import { Subpage, SubpageParams } from "../components/subpage/Layout";
import { GridData } from "../components/general/GridData";

export default function About() {
  const params: SubpageParams = {
    title: "About Me",
    navigation: {
      next: {
        name: "Education",
        href: "/education"
      }
    }
  };

  const today = new Date();
  const age = today.getFullYear() - 2006 - (today.getMonth() > 9 || (today.getMonth() === 9 && today.getDate() >= 18) ? 0 : 1);
  
  return (
    <Subpage params={params}>
      <section className="gap-4 md:gap-12 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-fit grid grid-rows-3 grid-cols-2 gap-1">
          <GridData title="Name" data="Douglas Lyman"/>
          <GridData title="Age" data={`${age} years old`}/>
          <GridData title="Location" data="Stockholm, Sweden"/>
        </div>
        
        <Image src="/me.JPEG" width={200} height={200} alt="The creator of this website, Douglas Lyman"/>
      </section>

      <section className="mt-5 mb-5">
        <p>
          My name is Douglas Lyman, I am an {age} year old student, studying programming and technology.
          I am interested in technology and gaming, where I spend most of my free time programming and playing games.
          My favourite programming languages are C/C++ and C#. Aditionally I know HTML, CSS and JavaScript, and lately
          I have been getting into Swift. I aspire to learn Rust and Go to complete my arsenal of languages that I believe
          are relevant to me.
        </p>
      </section>
    </Subpage>
  );
}