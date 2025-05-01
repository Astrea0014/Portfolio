export function HeaderNameplate({ className, text, text_small, textClassName }: Readonly<{ className: string | undefined, text: string, text_small: string | undefined, textClassName: string | undefined }>) {
  return (
    <div className={"p-4 text-white bg-[#00000088] backdrop-blur-xs justify-self-center self-center flex flex-col items-center justify-center " + className}>
      {text_small ?
        <h1 className="text-xs self-start">
          {text_small}
        </h1>
        : <></>}

      <h1 className={"font-bold " + textClassName}>
        {text}
      </h1>
    </div>
  );
}