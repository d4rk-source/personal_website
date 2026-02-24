type LogoVariant = "animated" | "static";

interface LogoProps {
  variant?: LogoVariant;
  showName?: boolean;
}

export default function Logo({ variant = "animated", showName = false }: LogoProps) {
  const logoClassName = variant === "static" ? "logo-anim logo-static" : "logo-anim";

  return (
    <div className="logo-wrap" aria-label="Alex Cipher">
      <div className={logoClassName}>
        <span className="logo-a">A</span>
        <span className="logo-lex">lex</span>
        <span className="logo-space"> </span>
        <span className="logo-c">C</span>
        <span className="logo-ipher">ipher</span>
      </div>
      {showName ? <span className="logo-name">Alex Cipher</span> : null}
    </div>
  );
}
