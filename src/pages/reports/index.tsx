import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Relatório Mensal - Janeiro 2024",
      description: "Análise completa das avaliações do mês",
      date: "31/01/2024",
      status: "Concluído",
      trend: "up",
      change: "+5.2%",
    },
    {
      title: "Relatório por Departamento - Q4 2023",
      description: "Performance por departamento no último trimestre",
      date: "15/01/2024",
      status: "Concluído",
      trend: "down",
      change: "-2.1%",
    },
    {
      title: "Relatório Individual - Top Performers",
      description: "Funcionários com melhor performance",
      date: "10/01/2024",
      status: "Concluído",
      trend: "up",
      change: "+8.7%",
    },
    {
      title: "Relatório de Metas - 2023",
      description: "Análise do cumprimento de metas anuais",
      date: "05/01/2024",
      status: "Em Processamento",
      trend: "neutral",
      change: "0%",
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600 dark:text-green-400";
      case "down":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="space-y-6 px-[20px] py-5 ">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white ">
            Relatórios
          </h2>
          <p className="text-muted-foreground">
            Visualize e baixe relatórios de performance
          </p>
        </div>
        <Button>Gerar Novo Relatório</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Relatórios Gerados
            </CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Performance Média
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4</div>
            <p className="text-xs text-muted-foreground">+0.3 pontos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Departamentos</CardTitle>
            <Badge variant="outline" className="text-black dark:text-white">
              5
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">Cobertura completa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Última Atualização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Hoje</div>
            <p className="text-xs text-muted-foreground">14:30</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          Relatórios Disponíveis
        </h3>

        <div className="grid gap-4">
          {reports.map((report, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        report.status === "Concluído" ? "default" : "secondary"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-muted-foreground">
                      Gerado em: {report.date}
                    </div>
                    <div
                      className={`flex items-center space-x-1 text-sm ${getTrendColor(
                        report.trend,
                      )}`}
                    >
                      {getTrendIcon(report.trend)}
                      <span>{report.change}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-[#d4d4d4] dark:bg-background text-black dark:text-white max-xl:py-1.5  hover:border-black dark:hover:border-white "
                    >
                      Visualizar
                    </Button>
                    {report.status === "Concluído" && (
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4 hover:border-white " />
                        Baixar
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
