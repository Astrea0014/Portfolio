import { HeaderSmall } from "../general/HeaderSmall"
import { CrossSubpageNavigator, CrossSubpageNavigatorArgs } from "../navigation/CrossSubpageNavigator";

export interface SubpageParams {
  title: string;
  navigation: CrossSubpageNavigatorArgs;
  className?: string;
}

export function Subpage({ children, params }: Readonly<{ children: React.ReactNode, params: SubpageParams }>) {
  return (
    <>
      <HeaderSmall title={params.title}/>

      <CrossSubpageNavigator args={params.navigation}/>

      <main className={"mx-auto max-w-80 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl " + params.className}>
        {children}
      </main>

      <CrossSubpageNavigator args={params.navigation}/>
    </>
  );
}