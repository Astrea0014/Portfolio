export function Header() {
  return (
    <header className="grid grid-cols-1 grid-rows-1 text-white">
      <picture className="row-start-1 row-end-1 col-start-1 col-end-1">
        <source srcSet="/ashe/Desktop.jpg" media="(min-width: 769px)"/>
        <source srcSet="/ashe/Tablet.jpg" media="(min-width: 600px)"/>
        <img src="/ashe/Mobile.jpg"/>
      </picture>

      <div className="w-70 h-32 p-4
                    bg-[#00000088] backdrop-blur-xs
                      justify-self-center self-center flex flex-col items-center
                      row-start-1 row-end-1 col-start-1 col-end-1">
        <h1 className="text-xs self-start">
          Hi, I am
        </h1>

        <h1 className="text-6xl mt-1.5 font-bold">
          Douglas.
        </h1>
      </div>

      <div className="w-full h-4 bg-linear-to-t from-white to-transparent row-start-1 row-end-1 col-start-1 col-end-1 self-end"></div>
    </header>
  );
}
