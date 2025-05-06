export function Footer() {
  return (
    <footer className="mt-auto w-full h-75 p-8 bg-[#111] text-white text-center">
      <h4 className="text-xl font-bold">Copyright &copy; 2025</h4>
      <p className="text-gray-300">Douglas Lyman - All rights reserved</p>

      <h5 className="mt-4 font-bold underline">Contact</h5>

      <div className="mt-2 text-left gap-8 flex">
        <div className="ml-auto">
          <p>Phone</p>
          <p>E-mail</p>
          <p className="mt-2.5">Mail</p>
        </div>

        <div className="mr-auto text-sm text-gray-300 flex flex-col gap-1.5">
          <p>+46 72-559 00 14</p>
          <p>douglas.lyman@icloud.com</p>
          <p>Ramtorpsvägen 26, Nykvarn<br/>15593 Stockholm, Sverige</p>
        </div>
      </div>
    </footer>
  );
}