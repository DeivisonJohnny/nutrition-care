"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Check,
  Laptop,
  Monitor,
  PictureInPicture2,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";
import Image from "next/image";
import { Spin } from "antd";
import "@/pages/pages-form-avaliation/form-steps/";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Storage from "@/utils/Storage";

const designs = [
  {
    id: "form-steps",
    name: "Formulario de Etapas",
    description: "Formulario por etapas",
    thumbnail: "/images/placeholder-image.webp",
    pathComponent: "form-steps/",
  },
  {
    id: "form-one-card",
    name: "Formulario com card principal",
    description: "Formulario por etapas",
    thumbnail: "/images/placeholder-image.webp",
    pathComponent: "form-one-card/",
  },
];

export default function FormCustom() {
  const [selectedDesign, setSelectedDesign] = useState<string>("");
  const containerPreview = useRef<HTMLDivElement>(null);

  const [LoadedComponent, setLoadedComponent] = useState<React.ComponentType<{
    containerWidth?: string;
  }> | null>(null);

  const [loadingComponent, setLoadingComponent] = useState(false);

  const componentMap: Record<
    string,
    () => Promise<{ default: React.ComponentType }>
  > = designs.reduce(
    (acc, item) => {
      acc[item.id] = () =>
        import(`@/pages/pages-form-avaliation/${item.pathComponent}`);
      return acc;
    },
    {} as Record<string, () => Promise<{ default: React.ComponentType }>>,
  );

  useEffect(() => {
    setLoadingComponent(true);
    if (selectedDesign) {
      const designLoaded = componentMap[selectedDesign];
      if (designLoaded) {
        const loadComponent = async () => {
          try {
            const Component = (await designLoaded()).default;
            setLoadedComponent(() => Component);
          } catch (error) {
            console.log("Erro ao carregar o componente:", error);
            setLoadedComponent(null);
          } finally {
            setLoadingComponent(false);
          }
        };
        loadComponent();
      } else {
        setLoadedComponent(null);
        setLoadingComponent(false);
      }
      Storage.set("selectedDesign", selectedDesign);
    }
    console.log("Container Preview:", containerPreview.current?.offsetLeft);
  }, [selectedDesign]);

  useEffect(() => {
    setSelectedDesign(Storage.get("selectedDesign", ""));
  }, []);

  useEffect(() => {
    if (containerPreview.current) {
      console.log("Container Preview:", containerPreview.current);
    }
  }, []);

  return (
    <div className="dark:bg-background flex max-h-[calc(100dvh-66px)] overflow-hidden bg-gray-50">
      <div className="dark:bg-background w-80 overflow-y-auto border-r border-gray-200 bg-white p-4">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Escolha seu Design
          </h2>
          <p className="text-sm text-gray-600 dark:text-white/60">
            Selecione um template para visualizar o preview
          </p>
        </div>
        <RadioGroup value={selectedDesign} onValueChange={setSelectedDesign}>
          <div className="space-y-3">
            {designs.map((design) => (
              <Label
                key={design.id}
                htmlFor={design.id}
                className="group block cursor-pointer"
              >
                <Card
                  className={`bg-foreground dark:bg-background py-0 transition-all duration-200 hover:shadow-md ${
                    selectedDesign === design.id
                      ? "shadow-md ring-2 ring-blue-500"
                      : ""
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={design.thumbnail || "/placeholder.svg"}
                        alt={design.name}
                        className="h-24 w-full rounded-[12.5px] object-cover"
                        width={1000}
                        height={1000}
                      />
                      <div
                        className={`absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                          selectedDesign === design.id
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300 bg-white group-hover:border-blue-300"
                        }`}
                      >
                        {selectedDesign === design.id && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <RadioGroupItem
                        id={design.id}
                        value={design.id}
                        className="sr-only"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        {design.name}
                      </h3>
                      <p className="text-xs text-gray-900 dark:text-white/60">
                        {design.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Label>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="flex-1 overflow-y-scroll">
        {selectedDesign ? (
          <div className="flex flex-col p-8">
            <div className="mb-6">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {designs.find((d) => d.id === selectedDesign)?.name}
              </h1>
              <p className="text-white/80">
                {designs.find((d) => d.id === selectedDesign)?.description}
              </p>
            </div>

            <div className="mb-6 flex-1 rounded-lg border bg-white p-1 shadow-sm">
              <div
                className="flex h-full min-h-96 w-full items-center justify-center overflow-hidden rounded-[8px] bg-gray-100"
                ref={containerPreview}
              >
                {loadingComponent ? (
                  <Spin size="default" />
                ) : LoadedComponent ? (
                  <LoadedComponent
                    containerWidth={containerPreview.current?.offsetWidth.toString()}
                  />
                ) : (
                  <p className="text-sm text-black">
                    Por algum motivo, não foi possível carregar o design
                    selecionado. Tente novamente mais tarde.
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Usar este Template</Button>
              <Button variant="outline">Personalizar</Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline">
                    <PictureInPicture2 />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="space-y-2">
                  <DropdownMenuLabel>Telas</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <div className="flex gap-2 px-2 pb-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              `/preview/${selectedDesign}`,
                              "_blank",
                              "width=375,height=812,noopener,noreferrer",
                            )
                          }
                        >
                          <Smartphone />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Celular (375x812)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              `/preview/${selectedDesign}`,
                              "_blank",
                              "width=768,height=1024,noopener,noreferrer",
                            )
                          }
                        >
                          <TabletSmartphone />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tablet (768x1024)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              `/preview/${selectedDesign}`,
                              "_blank",
                              "width=1366,height=768,noopener,noreferrer",
                            )
                          }
                        >
                          <Laptop />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Laptop (1366x768)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              `/preview/${selectedDesign}`,
                              "_blank",
                              "width=1920,height=1080,noopener,noreferrer",
                            )
                          }
                        >
                          <Monitor />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Desktop (1920x1080)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <div className="dark:bg-background flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
                <svg
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Selecione um Design
              </h3>
              <p className="text-gray-600 dark:text-white/60">
                Escolha um template da barra lateral para ver o preview aqui
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
