import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, FileText, BarChart3, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total de Funcionários",
      value: "248",
      description: "+12% em relação ao mês anterior",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Total de avaliações do mês",
      value: "187",
      description: "+8% em relação ao período anterior",
      icon: BarChart3,
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Total geral de avaliações",
      value: "23",
      description: "Desde abertura de seu perfil",
      icon: FileText,
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Performance deste mês",
      value: "8.4",
      description: "+8% em relação ao período anterior",
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="space-y-6 px-[20px] py-5 bg-[#f3f3f3] dark:bg-background ">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white ">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Visão geral do sistema de avaliação de funcionários
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Avaliações Recentes</CardTitle>
            <CardDescription>
              Últimas avaliações realizadas no sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              {[
                {
                  name: "Ana Silva",
                  department: "Desenvolvimento",
                  score: 9.2,
                },
                {
                  name: "Carlos Santos",
                  department: "Marketing",
                  score: 8.7,
                },
                {
                  name: "Maria Oliveira",
                  department: "Vendas",
                  score: 8.9,
                },
                {
                  name: "João Costa",
                  department: "RH",
                  score: 9.1,
                },
              ].map((evaluation) => (
                <div key={evaluation.name} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {evaluation.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {evaluation.department}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <span className="text-sm text-green-600 dark:text-green-400">
                      {evaluation.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3 ">
          <CardHeader>
            <CardTitle>Ranking</CardTitle>
            <CardDescription>
              Ranking dos funcionarios mais bem avaliados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Pedro Almeida",
                  department: "TI",
                  avatar: "https://github.com/leerob.png",
                  score: 8.9,
                  ranking: 1,
                },
                {
                  name: "Lucia Ferreira",
                  department: "Financeiro",
                  avatar: "https://github.com/shadcn.png",
                  score: 8.9,
                  ranking: 2,
                },
                {
                  name: "Roberto Lima",
                  department: "Operações",
                  avatar: "https://github.com/evilrabbit.png",
                  score: 7.0,
                  ranking: 3,
                },
              ].map((upcoming) => (
                <div key={upcoming.name} className="flex items-center ">
                  <div className="ml-[10px] space-y-1">
                    <div className="flex flex-row items-center gap-2.5 ">
                      <div className=" text-[18px]  text-[#2c2c2c] dark:text-[#c9c9c9] flex pt-[5px] mr-1.5 ">
                        {upcoming.ranking}
                      </div>
                      <Avatar>
                        <AvatarImage src={upcoming.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium leading-none">
                        {upcoming.name}
                      </p>
                    </div>
                    <p className=" ml-16.5 text-sm text-muted-foreground">
                      {upcoming.department}
                    </p>
                  </div>
                  <div className="ml-auto text-lg flex items-center justify-center  text-[#2c2c2c] dark:text-blue-100  ">
                    {upcoming.score}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
