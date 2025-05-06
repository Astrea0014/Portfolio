export function GridData({ title, data }: Readonly<{ title: string, data: string }>) {
  return (
    <>
      <h2 className="text-2xl font-bold self-center">{title}</h2>
      <p className="self-center">{data}</p>
    </>
  );
}