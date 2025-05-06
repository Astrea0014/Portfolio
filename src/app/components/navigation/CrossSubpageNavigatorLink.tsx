import Image from "next/image";

export interface CrossSubpageNavigatorLinkArgs {
  name: string;
  href: string;
  direction: "left" | "right" | "home";
}

export function CrossSubpageNavigatorLink({ name, href, direction }: Readonly<CrossSubpageNavigatorLinkArgs>) {
  return (
    <a href={href} className={"flex items-center gap-2 " + (direction === "right" ? "flex-row-reverse col-start-2 col-end-2 justify-self-end" : "flex-row")}>
      <Image src={
        direction === "right" ?
        "/icons/arrow-forward-svgrepo-com.svg" :
        ( direction === "home" ?
          "/icons/arrow-back-white-svgrepo-com.svg" :
          "/icons/arrow-back-svgrepo-com.svg"
        )} width={20} height={20} alt={"Navigation arrow"} className="mt-0.5"/>
      <span className="underline">{name}</span>
      {direction !== "home" ?
      <span className="mt-0.5 text-sm text-gray-600">{direction === "right" ? "Next -" : "- Previous"}</span>
      : null}
    </a>
  );
}