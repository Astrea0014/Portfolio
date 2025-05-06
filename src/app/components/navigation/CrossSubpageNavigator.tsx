import { CrossSubpageNavigatorLink } from "./CrossSubpageNavigatorLink";

export interface CrossSubpageNavigatorArgs {
  previous?: {
    name: string;
    href: string;
  };
  next?: {
    name: string;
    href: string
  };
}

export function CrossSubpageNavigator({ args }: Readonly<{ args: CrossSubpageNavigatorArgs }>) {
  return (
    <nav className={"w-full max-w-4xl mx-auto p-4 grid grid-rows-1 grid-cols-2"}>
      {args.previous ?
      <CrossSubpageNavigatorLink name={args.previous.name} href={args.previous.href} direction="left"/>
      : null}

      {args.next ?
      <CrossSubpageNavigatorLink name={args.next.name} href={args.next.href} direction="right"/>
      : null}
    </nav>
  );
}