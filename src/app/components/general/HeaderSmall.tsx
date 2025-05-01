import { HeaderNameplate } from "./HeaderNameplate";
import { HeaderPicture } from "./HeaderPicture";
import { HeaderTransition } from "./HeaderTransition";

export function HeaderSmall({ title }: Readonly<{ title: string }>) {
  return (
    <header className="grid grid-cols-1 grid-rows-1">
      <HeaderPicture className="w-full h-40 object-cover object-(--small-bg-object-position-mobile)" containerClassName="row-start-1 row-end-1 col-start-1 col-end-1"/>
      <HeaderNameplate text={title} text_small={undefined} className="w-70 h-20 row-start-1 row-end-1 col-start-1 col-end-1" textClassName="text-5xl text-center"/>
      <HeaderTransition className="row-start-1 row-end-1 col-start-1 col-end-1 self-end"/>
    </header>
  );
}