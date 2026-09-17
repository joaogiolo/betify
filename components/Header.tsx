import { content } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";
import { LogoFull, LogoMark } from "./LogoServer";
import { LogoWordmark } from "./Logo";
import { HeaderShell } from "./HeaderShell";

export function Header() {
  return (
    <HeaderShell>
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline-flex">
            <LogoFull />
          </span>
          <span className="inline-flex md:hidden items-center gap-2">
            <LogoMark />
            <LogoWordmark />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton location="header" size="sm">
          Quero entrar
        </WhatsAppButton>
      </div>
    </HeaderShell>
  );
}
