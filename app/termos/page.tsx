import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Betini Academy",
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 md:px-8 py-24 md:py-32">
      <Link href="/" className="text-sm text-accent hover:underline">
        ← Voltar para a página inicial
      </Link>
      <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-8">
        Termos de Uso
      </h1>
      <p className="text-text-muted leading-relaxed">
        [Conteúdo dos Termos de Uso a ser preenchido pelo cliente. Esta
        página é um placeholder criado para manter os links do rodapé
        funcionais.]
      </p>
    </main>
  );
}
