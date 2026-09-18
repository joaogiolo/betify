import Link from "next/link";
import { content } from "@/lib/config";
import { LogoFull } from "./LogoServer";

export function Footer() {
  return (
    <footer className="bg-black relative">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <LogoFull className="mb-4" />
          <p className="text-text-muted text-sm max-w-xs">
            Mentoria para vender e escalar nos marketplaces.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-text">Navegação</h3>
          <ul className="space-y-2.5">
            {content.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-text">Atendimento</h3>
          <ul className="space-y-2.5">
            <li>
              <span className="text-sm text-text-muted">
                Instagram{" "}
                {content.social.instagram ? (
                  <a
                    href={content.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    @cauabetini_
                  </a>
                ) : (
                  <span className="italic">[link a definir]</span>
                )}
              </span>
            </li>
            <li>
              <span className="text-sm text-text-muted">
                TikTok{" "}
                {content.social.tiktok ? (
                  <a
                    href={content.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    @cauabetini_
                  </a>
                ) : (
                  <span className="italic">[link a definir]</span>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; 2026 Betini Academy. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-8">
        <p className="text-[11px] leading-relaxed text-text-muted/70 max-w-3xl">
          {content.legalNotice}
        </p>
      </div>
    </footer>
  );
}
