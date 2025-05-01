import { HeaderNameplate } from "./HeaderNameplate";
import { HeaderPicture } from "./HeaderPicture";
import { HeaderTransition } from "./HeaderTransition";

export function Header() {
  return (
    <header className="grid grid-cols-1 grid-rows-1 text-white">
      <HeaderPicture className={undefined} containerClassName="row-start-1 row-end-1 col-start-1 col-end-1"/>

      <HeaderNameplate text_small="Hi, I am" text="Douglas." className="w-70 h-32 row-start-1 row-end-1 col-start-1 col-end-1" textClassName="text-6xl mt-1.5"/>

      <HeaderTransition className="row-start-1 row-end-1 col-start-1 col-end-1 self-end"/>
    </header>
  );
}
