type LogoVariant = "animated" | "static";

interface LogoProps {
  variant?: LogoVariant;
  showName?: boolean;
  filled?: boolean;
}

export default function Logo({
  variant = "animated",
  showName = false,
  filled = false,
}: LogoProps) {
  const logoClassName = [
    "logo-anim",
    variant === "static" ? "logo-static" : null,
    filled ? "logo-filled" : null,
  ]
    .filter(Boolean)
    .join(" ");

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
