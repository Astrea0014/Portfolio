import Image from "next/image";

interface EducationItemArgs {
  study: string;
  name: string;
  location: string;
  timespan: string;
  logo: string;
  alt: string;
  description: string;
}

export function EducationItem({ study, name, location, timespan, logo, alt, description }: EducationItemArgs) {
  return (
    <div className="w-80 h-120 px-4 py-8 bg-gray-100 hover:bg-gray-300 border-3 border-gray-400 rounded-md">
      <section className="flex flex-col-reverse items-center">
        <div className="mt-8">
          <h1 className="text-2xl font-bold">{study}</h1>

          <h2 className="w-full flex flex-wrap">
            <span className="block text-xl">{name}</span>
            <span>{location}</span>
            <span className="mt-auto ml-auto text-sm text-gray-500">{timespan}</span>
          </h2>

          <p className="mt-2">
            {description}
          </p>
        </div>

        <Image src={logo} width={150} height={150} alt={alt}/>
      </section>
    </div>
  );
}