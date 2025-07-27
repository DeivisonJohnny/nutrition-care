"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Settings, QrCode } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  {
    id: "view-designs",
    title: "Visualizar Designs",
    description: "Navegue e selecione entre diferentes templates de design",
    icon: Eye,
    href: "/design-selector",
  },
  {
    id: "configure-page",
    title: "Configurar Página",
    description: "Personalize cores, fontes e layout da sua página",
    icon: Settings,
    href: "/form-custom",
  },
  {
    id: "configure-qrcode",
    title: "Download QRCODE",
    description:
      "Visualize e faça o download do QR code gerado com template selecionado",
    icon: QrCode,
    href: "/configure",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="px-16 py-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Painel Configuração
          </h1>
          <p className="text-[16px] max-w-2xl text-gray-600 dark:text-gray-300">
            Configuração da página de avaliação
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-16 py-6">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.id} href={item.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-[#171717]">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <Button
                      className="w-full bg-gray-700 hover:bg-[#171717] dark:bg-gray-600 dark:hover:bg-gray-500 text-white border-0 shadow-md transition-colors"
                      size="sm"
                      onClick={() => router.push(item.href)}
                    >
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
