export function HeaderPicture({ containerClassName, className }: Readonly<{ containerClassName: string | undefined, className: string | undefined }>) {
  return (
    <picture className={containerClassName}>
      <source srcSet="/ashe/Desktop.jpg" media="(min-width: 769px)" />
      <source srcSet="/ashe/Tablet.jpg" media="(min-width: 600px)" />
      <img src="/ashe/Mobile.jpg" className={className} />
    </picture>
  );
}