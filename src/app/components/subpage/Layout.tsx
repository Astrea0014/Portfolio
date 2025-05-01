import { HeaderSmall } from "../general/HeaderSmall"

export interface SubpageParams {
  title: string;
}

export function Subpage({ children, params }: Readonly<{ children: React.ReactNode, params: SubpageParams }>) {
  return (
    <>
      <HeaderSmall title={params.title}/>

      <main>
        {children}
      </main>
    </>
  );
}