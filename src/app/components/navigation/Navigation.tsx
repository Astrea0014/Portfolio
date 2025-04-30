import Image from "next/image";

export interface NavInteractibleParams {
  href: string;
  label: string;
  icon: string;
  alt: string;
}

export function MobileNavBox({ params }: Readonly<{ params: NavInteractibleParams }>) {
  return (
    <div className="w-70 h-35 p-6
                    flex flex-col items-center
                    border-3 rounded-md border-gray-400
                  hover:bg-gray-300 bg-gray-100">
      <Image src={params.icon} width={50} height={50} alt={params.alt}/>
      
      <h3 className="text-2xl mt-2 text-gray-500">
        {params.label}
      </h3>
    </div>
  );
}