export function HeaderTransition({ className }: Readonly<{ className: string | undefined }>) {
  return (
    <div className={"w-full h-4 bg-linear-to-t from-white to-transparent " + className} />
  );
}