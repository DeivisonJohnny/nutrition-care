"use client";

import HeaderSticky from "@/components/HeaderSticky";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Filter,
  Download,
  Star,
  MessageSquare,
  MoreHorizontal,
  Eye,
  Reply,
} from "lucide-react";

export default function EmployeeReviews() {
  const funcionario = {
    id: "EMP001",
    nome: "Marina Oliveira",
    cargo: "Atendente Senior",
    departamento: "Atendimento ao Cliente",
    foto: "/placeholder.svg?height=60&width=60",
    status: "Ativo",
    dataAdmissao: "2021-03-15",
  };

  const avaliacoes = [
    {
      id: "REV001",
      cliente: {
        nome: "João Silva",
        email: "joao.silva@email.com",
        id: "CLI001",
      },
      nota: 2,
      data: "2024-01-20T14:30:00",
      servico: "Suporte Técnico",
      canal: "Chat Online",
      status: "Pendente",
      prioridade: "Alta",
      comentario:
        "Atendimento demorado e funcionária parecia desinteressada. Não conseguiu resolver meu problema e me transferiu 3 vezes.",
      categoria: "Qualidade do Atendimento",
      tempoAtendimento: "25min",
      respondida: false,
    },
    {
      id: "REV002",
      cliente: {
        nome: "Maria Santos",
        email: "maria.santos@email.com",
        id: "CLI002",
      },
      nota: 5,
      data: "2024-01-19T10:15:00",
      servico: "Cancelamento",
      canal: "Telefone",
      status: "Resolvido",
      prioridade: "Baixa",
      comentario:
        "Marina foi muito atenciosa e resolveu minha solicitação rapidamente. Excelente profissional!",
      categoria: "Elogio",
      tempoAtendimento: "8min",
      respondida: true,
      resposta: "Obrigada pelo feedback positivo! Ficamos felizes em ajudar.",
    },
    {
      id: "REV003",
      cliente: {
        nome: "Carlos Mendes",
        email: "carlos.mendes@email.com",
        id: "CLI003",
      },
      nota: 3,
      data: "2024-01-18T16:45:00",
      servico: "Informações",
      canal: "Email",
      status: "Em Análise",
      prioridade: "Média",
      comentario:
        "Atendimento ok, mas poderia ter sido mais rápido. Marina foi educada mas demorou para responder.",
      categoria: "Tempo de Resposta",
      tempoAtendimento: "15min",
      respondida: false,
    },
    {
      id: "REV004",
      cliente: {
        nome: "Ana Costa",
        email: "ana.costa@email.com",
        id: "CLI004",
      },
      nota: 4,
      data: "2024-01-17T11:20:00",
      servico: "Reclamação",
      canal: "Presencial",
      status: "Resolvido",
      prioridade: "Média",
      comentario:
        "Marina ouviu minha reclamação com atenção e conseguiu resolver a situação. Boa profissional.",
      categoria: "Resolução de Problemas",
      tempoAtendimento: "12min",
      respondida: true,
      resposta: "Agradecemos sua paciência e compreensão durante o processo.",
    },
  ];

  const renderStars = (nota: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < nota
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen ">
      <HeaderSticky>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={funcionario.foto || "/placeholder.svg"}
                  alt={funcionario.nome}
                />
                <AvatarFallback className="bg-blue-100 text-blue-700">
                  {funcionario.nome
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gray-50">
                  {funcionario.nome}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {funcionario.cargo}
                </p>
              </div>
            </div>

            {/* Filtros Horizontais */}
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-[300px]">
                <Input placeholder="Buscar avaliações..." className="w-full" />
              </div>

              <Select defaultValue="todos">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="analise">Em Análise</SelectItem>
                  <SelectItem value="resolvido">Resolvido</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="todas">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Nota" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="1-2">1-2 ★</SelectItem>
                  <SelectItem value="3">3 ★</SelectItem>
                  <SelectItem value="4-5">4-5 ★</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>

              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </HeaderSticky>
      <div className="bg-white dark:bg-background px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 dark:text-blue-50 font-bold ">
              Gestão de Avaliações
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Análise detalhada do desempenho do funcionário
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Informações do Funcionário */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle>Informações do Funcionário</CardTitle>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {funcionario.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={funcionario.foto || "/placeholder.svg"}
                  alt={funcionario.nome}
                />
                <AvatarFallback className="bg-blue-100 text-blue-700 text-lg">
                  {funcionario.nome
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                <div>
                  <p className="text-sm text-gray-500">Nome</p>
                  <p className="font-semibold">{funcionario.nome}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cargo</p>
                  <p className="font-semibold">{funcionario.cargo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Departamento</p>
                  <p className="font-semibold">{funcionario.departamento}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filtros e Controles */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className=" relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por cliente, comentário ou ID..."
                  className="pl-10 w-full"
                />
              </div>
              <Select defaultValue="todos">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos Status</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="analise">Em Análise</SelectItem>
                  <SelectItem value="resolvido">Resolvido</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="todas">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Nota" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas Notas</SelectItem>
                  <SelectItem value="1-2">1-2 Estrelas</SelectItem>
                  <SelectItem value="3">3 Estrelas</SelectItem>
                  <SelectItem value="4-5">4-5 Estrelas</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Avaliações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Avaliações Recebidas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {avaliacoes.map((avaliacao, index) => (
                <div key={avaliacao.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex">
                            {renderStars(avaliacao.nota)}
                          </div>
                          <span className="text-sm font-semibold">
                            {avaliacao.nota}.0
                          </span>
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-50 ">
                              {avaliacao.cliente.nome}
                            </h4>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div className="text-gray-800 dark:text-gray-300 ">
                              <span className="text-gray-800 dark:text-gray-50/80 font-semibold">
                                Serviço:
                              </span>{" "}
                              {avaliacao.servico}
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 ">
                              <span className="text-gray-800 dark:text-gray-50/80 font-semibold">
                                Canal:
                              </span>{" "}
                              {avaliacao.canal}
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 ">
                              <span className="text-gray-800 dark:text-gray-50/80 font-semibold">
                                Tempo:
                              </span>{" "}
                              {avaliacao.tempoAtendimento}
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 ">
                              <span className="text-gray-800 dark:text-gray-50/80 font-semibold">
                                Data:
                              </span>{" "}
                              {new Date(avaliacao.data).toLocaleDateString(
                                "pt-BR",
                              )}
                            </div>
                          </div>

                          <p className="text-gray-700 dark:text-gray-50 bg-gray-50/50 dark:bg-[#ffffff1f]/40 p-3 rounded-lg text-sm">
                            {avaliacao.comentario}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {!avaliacao.respondida && (
                          <Button variant="ghost" size="sm">
                            <Reply className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {index < avaliacoes.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
