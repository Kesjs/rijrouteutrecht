import { EyebrowBadge } from "./Badge";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="dot-grid border-b border-fog/40 bg-pure-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:py-20">
        {eyebrow && <EyebrowBadge>{eyebrow}</EyebrowBadge>}
        <h1 className="mt-4 max-w-3xl text-[34px] font-bold leading-[1.15] md:text-[46px] md:leading-[1.1]">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-[17px] text-slate">{intro}</p>
        )}
        {children && (
          <div className="mt-6 flex flex-wrap gap-3">{children}</div>
        )}
      </div>
    </header>
  );
}
