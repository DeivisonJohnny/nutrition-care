"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Eye, Star, Filter } from "lucide-react";

export default function EmployeeEvaluations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const evaluations = [
    {
      id: 1,
      employee: "Ana Silva",
      department: "Atendimento",
      client: "João Pereira",
      service: "Consultoria Financeira",
      rating: 5,
      score: 9.2,
      status: "Concluída",
      date: "2024-01-15",
      comment: "Excelente atendimento, muito profissional e atenciosa.",
    },
    {
      id: 2,
      employee: "Carlos Santos",
      department: "Vendas",
      client: "Maria Oliveira",
      service: "Venda de Produto",
      rating: 4,
      score: 8.7,
      status: "Concluída",
      date: "2024-01-10",
      comment: "Bom atendimento, produto entregue conforme prometido.",
    },
    {
      id: 3,
      employee: "Maria Fernandes",
      department: "Suporte Técnico",
      client: "Pedro Costa",
      service: "Suporte Técnico",
      rating: 5,
      score: 9.5,
      status: "Concluída",
      date: "2024-01-08",
      comment: "Resolveu meu problema rapidamente. Muito competente!",
    },
    {
      id: 4,
      employee: "Pedro Almeida",
      department: "Atendimento",
      client: "Ana Rodrigues",
      service: "Atendimento Geral",
      rating: 3,
      score: 7.2,
      status: "Concluída",
      date: "2024-01-20",
      comment: "Atendimento ok, mas poderia ser mais rápido.",
    },
    {
      id: 5,
      employee: "Lucia Ferreira",
      department: "Vendas",
      client: "Roberto Silva",
      service: "Consultoria",
      rating: 4,
      score: 8.9,
      status: "Concluída",
      date: "2024-01-18",
      comment: "Boa explicação dos produtos, muito educada.",
    },
    {
      id: 6,
      employee: "Ricardo Mendes",
      department: "Suporte Técnico",
      client: "Carla Santos",
      service: "Instalação",
      rating: 2,
      score: 6.1,
      status: "Concluída",
      date: "2024-01-12",
      comment: "Demorou mais que o esperado para resolver.",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-green-600 dark:text-green-400";
    if (score >= 7) return "text-yellow-600 dark:text-yellow-400";
    if (score > 0) return "text-red-600 dark:text-red-400";
    return "text-gray-400";
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const filteredEvaluations = evaluations.filter((evaluation) => {
    const matchesSearch =
      evaluation.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evaluation.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evaluation.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      evaluation.status.toLowerCase() === statusFilter;
    const matchesDepartment =
      departmentFilter === "all" ||
      evaluation.department.toLowerCase() === departmentFilter;

    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <div className="space-y-6 px-6 py-8 max-w-7xl mx-auto relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white ">
            Avaliações de Funcionários
          </h1>
          <p className="text-muted-foreground">
            Visualize e gerencie todas as avaliações feitas pelos clientes
          </p>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1 w-full sm:max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por funcionário, cliente ou serviço..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="concluída">Concluída</SelectItem>
                <SelectItem value="em andamento">Em Andamento</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={departmentFilter}
              onValueChange={setDepartmentFilter}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Departamentos</SelectItem>
                <SelectItem value="atendimento">Atendimento</SelectItem>
                <SelectItem value="vendas">Vendas</SelectItem>
                <SelectItem value="suporte técnico">Suporte Técnico</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Filtros Sticky */}
      <div
        className={`fixed top-16 left-0 right-0 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "translate-y-0 opacity-100 backdrop-blur-md bg-[#fefefe]/80  dark:bg-background/80 border-b shadow-sm"
            : "-translate-y-full opacity-0"
        } 
  md:left-[var(--sidebar-width,0px)] 
  z-[100]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1 w-full sm:max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4   text-black dark:text-blue-50  " />
              <Input
                placeholder="Buscar..."
                className="pl-8 h-9 text-sm   text-black dark:text-blue-50   "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[140px] h-9 text-sm text-black dark:text-blue-50  ">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="concluída">Concluída</SelectItem>
                  <SelectItem value="em andamento">Em Andamento</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={departmentFilter}
                onValueChange={setDepartmentFilter}
              >
                <SelectTrigger className="w-full sm:w-[140px] h-9 text-sm  text-black dark:text-blue-50 ">
                  <SelectValue placeholder="Depto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="atendimento">Atendimento</SelectItem>
                  <SelectItem value="vendas">Vendas</SelectItem>
                  <SelectItem value="suporte técnico">Suporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Espaçamento para evitar sobreposição quando sticky está ativo */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-20 sm:h-16" : "h-0"
        }`}
      />

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">
              {filteredEvaluations.length}
            </div>
            <p className="text-xs text-muted-foreground">Total de Avaliações</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">
              {filteredEvaluations.filter((e) => e.rating >= 4).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Avaliações Positivas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">
              {filteredEvaluations.filter((e) => e.rating === 3).length}
            </div>
            <p className="text-xs text-muted-foreground">Avaliações Neutras</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">
              {filteredEvaluations.filter((e) => e.rating <= 2).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Avaliações Negativas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Avaliações */}
      <div className="space-y-4">
        {filteredEvaluations.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                Nenhuma avaliação encontrada com os filtros aplicados.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredEvaluations.map((evaluation) => (
            <Card
              key={evaluation.id}
              className="transition-all hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">
                        {evaluation.employee}
                      </CardTitle>
                      <Badge>{evaluation.department}</Badge>
                    </div>
                    <CardDescription>
                      Avaliado por:{" "}
                      <span className="font-medium">{evaluation.client}</span> •
                      Serviço:{" "}
                      <span className="font-medium">{evaluation.service}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">
                        Avaliação
                      </p>
                      <div className="flex items-center space-x-1">
                        {getRatingStars(evaluation.rating)}
                        <span className="ml-2 font-medium">
                          {evaluation.rating}/5
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">
                        Pontuação
                      </p>
                      <p
                        className={`text-lg font-bold ${getScoreColor(
                          evaluation.score,
                        )}`}
                      >
                        {evaluation.score.toFixed(1)}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">
                        Data
                      </p>
                      <p>
                        {new Date(evaluation.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">
                        Status
                      </p>
                      <p>{evaluation.status}</p>
                    </div>
                  </div>

                  {evaluation.comment && (
                    <div>
                      <p className="font-medium text-muted-foreground mb-2">
                        Comentário do Cliente:
                      </p>
                      <p className="text-sm bg-muted p-3 rounded-md italic">
                        &quot;{evaluation.comment}&quot;
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end pt-2">
                    <Button size="sm" className="text-white dark:text-black">
                      <Eye className="mr-2 h-4 w-4     " />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
