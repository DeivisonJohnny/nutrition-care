"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone, Grid3X3, List } from "lucide-react";
import Clipboard from "@/components/actions/Clipboard";
import { VIEW_MODE } from "@/utils/Constant";
import Storage from "@/utils/Storage";
import { useRouter } from "next/router";
import HeaderSticky from "@/components/HeaderSticky";

export default function Employees() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const router = useRouter();

  useEffect(() => {
    const storedValue = Storage.get(VIEW_MODE, "grid");
    if (storedValue === "grid" || storedValue === "list") {
      setViewMode(storedValue);
    }
  }, []);

  useEffect(() => {
    Storage.set(VIEW_MODE, viewMode);
  }, [viewMode]);

  const employees = [
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@empresa.com",
      phone: "(11) 99999-9999",
      department: "Desenvolvimento",
      position: "Desenvolvedora Senior",
      status: "Ativo",
      lastEvaluation: "2024-01-15",
    },
    {
      id: 2,
      name: "Carlos Santos",
      email: "carlos.santos@empresa.com",
      phone: "(11) 88888-8888",
      department: "Marketing",
      position: "Analista de Marketing",
      status: "Ativo",
      lastEvaluation: "2024-01-10",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      email: "maria.oliveira@empresa.com",
      phone: "(11) 77777-7777",
      department: "Vendas",
      position: "Gerente de Vendas",
      status: "Ativo",
      lastEvaluation: "2024-01-08",
    },
    {
      id: 4,
      name: "João Costa",
      email: "joao.costa@empresa.com",
      phone: "(11) 66666-6666",
      department: "RH",
      position: "Analista de RH",
      status: "Férias",
      lastEvaluation: "2023-12-20",
    },
  ];

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <>
      <HeaderSticky scrollY={150}>
        <div className="flex items-center justify-between px-6 py-4 ">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar funcionários..."
              className="pl-8 text-black dark:text-white "
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleViewMode}
            className="ml-4 bg-white dark:bg-background text-black dark:text-white"
          >
            {viewMode === "grid" ? (
              <>
                <List className="mr-2 h-4 w-4" />
                Linhas
              </>
            ) : (
              <>
                <Grid3X3 className="mr-2 h-4 w-4" />
                Grade
              </>
            )}
          </Button>
        </div>
      </HeaderSticky>
      <div className="space-y-6 px-[20px] py-2.5">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-3 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
              Funcionários
            </h2>
            <p className="text-muted-foreground">
              Gerencie os funcionários da empresa
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Funcionário
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar funcionários..." className="pl-8" />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleViewMode}
            className="ml-4 bg-white dark:bg-background text-black dark:text-white"
          >
            {viewMode === "grid" ? (
              <>
                <List className="mr-2 h-4 w-4" />
                Linhas
              </>
            ) : (
              <>
                <Grid3X3 className="mr-2 h-4 w-4" />
                Grade
              </>
            )}
          </Button>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-2.5 "
              : "space-y-4 px-2.5"
          }
        >
          {employees.map((employee) => (
            <Card
              key={employee.id}
              className={`transition-all hover:shadow-md ${
                viewMode === "list" ? "w-full" : ""
              }`}
            >
              <div
                className={viewMode === "list" ? "flex max-xl:flex-col" : ""}
              >
                <CardHeader
                  className={viewMode === "list" ? "flex-1 max-xl:pb-3" : ""}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{employee.name}</CardTitle>
                    <Badge
                      variant={
                        employee.status === "Ativo" ? "default" : "secondary"
                      }
                    >
                      {employee.status}
                    </Badge>
                  </div>
                  <CardDescription>{employee.position}</CardDescription>
                </CardHeader>

                <CardContent
                  className={`space-y-3 ${
                    viewMode === "list"
                      ? "flex-1 flex flex-col justify-between max-xl:pt-0"
                      : ""
                  }`}
                >
                  <div
                    className={
                      viewMode === "list"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                        : "space-y-3"
                    }
                  >
                    <div className="text-sm">
                      <p className="font-medium text-muted-foreground">
                        Departamento
                      </p>
                      <p>{employee.department}</p>
                    </div>

                    <div
                      className={`text-sm ${
                        viewMode === "list"
                          ? ""
                          : "flex items-center space-x-2 text-muted-foreground"
                      }`}
                    >
                      {viewMode === "list" ? (
                        <>
                          <p className="font-medium text-muted-foreground">
                            Email
                          </p>
                          <p className="flex items-center space-x-1">
                            <Mail className="h-4 w-4" />
                            <span className="w-full truncate text-left">
                              <Clipboard>{employee.email}</Clipboard>
                            </span>
                          </p>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>
                            <Clipboard>{employee.email}</Clipboard>
                          </span>
                        </>
                      )}
                    </div>

                    <div
                      className={`text-sm ${
                        viewMode === "list"
                          ? ""
                          : "flex items-center space-x-2 text-muted-foreground"
                      }`}
                    >
                      {viewMode === "list" ? (
                        <>
                          <p className="font-medium text-muted-foreground">
                            Telefone
                          </p>
                          <p className="flex items-center space-x-1">
                            <Phone className="h-4 w-4" />
                            <span>
                              <Clipboard>{employee.phone}</Clipboard>
                            </span>
                          </p>
                        </>
                      ) : (
                        <>
                          <Phone className="h-4 w-4" />
                          <span>
                            <Clipboard>{employee.phone}</Clipboard>
                          </span>
                        </>
                      )}
                    </div>

                    <div className="text-sm">
                      <p className="font-medium text-muted-foreground">
                        Última Avaliação
                      </p>
                      <p>
                        {new Date(employee.lastEvaluation).toLocaleDateString(
                          "pt-BR",
                        )}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-2 ${
                      viewMode === "list" ? "mt-4" : ""
                    }`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-[#f3f3f3] dark:bg-background text-black dark:text-white max-xl:py-1.5 "
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-[#f3f3f3] dark:bg-background text-black dark:text-white max-xl:py-1.5 "
                      onClick={() =>
                        router.push(`/employee-reviews/${employee.id}`)
                      }
                    >
                      Avaliações
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
