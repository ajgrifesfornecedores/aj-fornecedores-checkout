import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Lista AJ Fornecedores | Compre direto da fonte",
    description:
      "Mais de 150 fornecedores verificados para montar ou abastecer sua loja com mais segurança e margem.",
    openGraph: {
      title: "A lista de fornecedores que ajudou a construir 3 lojas",
      description:
        "Moda masculina e feminina, calçados, bonés, perfumes, acessórios, tabacaria e muito mais.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/og-light.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lista AJ Fornecedores",
      description: "Compre melhor, pague menos e aumente sua margem.",
      images: ["/og-light.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
