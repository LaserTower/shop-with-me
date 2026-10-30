import logoUrl from "../../assets/logo.svg";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="/" className="group inline-flex items-center gap-3" aria-label="Shop With Me — на главную">
      <img src={logoUrl} alt="" width="42" height="42" className="shrink-0 transition-transform duration-300 group-hover:-rotate-3" />
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-[-0.03em] ${inverse ? "text-white" : "text-[#173f35]"}`}>
          Shop With Me
        </span>
        <span className={`mt-1.5 block text-[10px] font-bold tracking-[0.14em] uppercase ${inverse ? "text-white/55" : "text-[#648077]"}`}>
          питание · покупки
        </span>
      </span>
    </a>
  );
}
