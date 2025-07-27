"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageCircle, Users, Award } from "lucide-react";

export default function ServiceEvaluationForm(containerWidth?: string) {
  const [rating, setRating] = useState("");

  return (
    <div
      style={
        containerWidth
          ? { width: containerWidth, height: "100%" }
          : { maxWidth: "100%", height: "100%" }
      }
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-screen items-center gap-8 py-8 @lg:grid-cols-2 @lg:gap-12">
            {/* Left Side - Hidden on mobile */}
            <div className="hidden flex-col justify-center space-y-8 @lg:flex">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  <Award className="mr-2 h-4 w-4" />
                  Avaliação de Qualidade
                </div>

                <h1 className="text-4xl leading-tight font-bold text-gray-900 @lg:text-5xl">
                  Sua opinião nos
                  <span className="text-blue-600"> ajuda a melhorar</span>
                </h1>

                <p className="text-xl leading-relaxed text-gray-600">
                  Compartilhe sua experiência conosco e nos ajude a oferecer um
                  atendimento cada vez melhor para todos os nossos clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-lg bg-blue-100 p-3">
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900">
                          Feedback Valioso
                        </h3>
                        <p className="text-sm text-gray-600">
                          Cada avaliação nos ajuda a identificar pontos de
                          melhoria e reconhecer nossos sucessos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-lg bg-green-100 p-3">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900">
                          Atendimento Personalizado
                        </h3>
                        <p className="text-sm text-gray-600">
                          Utilizamos suas avaliações para personalizar e
                          melhorar nosso atendimento.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">Já tem uma conta?</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 bg-transparent text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
                >
                  FAZER LOGIN
                </Button>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full">
              <Card className="border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
                <CardContent className="p-8 @lg:p-12">
                  <div className="space-y-8">
                    <div className="space-y-4 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                        <Star className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Avaliação de Atendimento
                      </h2>
                      <p className="text-lg text-gray-600">
                        Sua opinião é muito importante para melhorarmos nosso
                        atendimento.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Nome *
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Seu nome"
                            className="h-12 border-gray-200 transition-colors focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Sobrenome *
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Seu sobrenome"
                            className="h-12 border-gray-200 transition-colors focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="h-12 border-gray-200 transition-colors focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-4">
                        <Label className="text-sm font-medium text-gray-700">
                          Como você avalia nosso atendimento? *
                        </Label>
                        <RadioGroup
                          value={rating}
                          onValueChange={setRating}
                          className="grid grid-cols-2 gap-3"
                        >
                          <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                            <RadioGroupItem value="excelente" id="excelente" />
                            <Label
                              htmlFor="excelente"
                              className="cursor-pointer text-sm font-medium"
                            >
                              😊 Excelente
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                            <RadioGroupItem value="bom" id="bom" />
                            <Label
                              htmlFor="bom"
                              className="cursor-pointer text-sm font-medium"
                            >
                              🙂 Bom
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                            <RadioGroupItem value="regular" id="regular" />
                            <Label
                              htmlFor="regular"
                              className="cursor-pointer text-sm font-medium"
                            >
                              😐 Regular
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                            <RadioGroupItem value="ruim" id="ruim" />
                            <Label
                              htmlFor="ruim"
                              className="cursor-pointer text-sm font-medium"
                            >
                              😞 Ruim
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="comments"
                          className="text-sm font-medium text-gray-700"
                        >
                          Comentários (opcional)
                        </Label>
                        <Textarea
                          id="comments"
                          placeholder="Conte-nos mais sobre sua experiência..."
                          className="min-h-[100px] resize-none border-gray-200 transition-colors focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" className="mt-1" />
                        <Label
                          htmlFor="terms"
                          className="text-sm leading-relaxed text-gray-600"
                        >
                          Aceito os{" "}
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Termos & Condições
                          </a>{" "}
                          e autorizo o uso dos meus dados para melhoria dos
                          serviços.
                        </Label>
                      </div>

                      <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl">
                        ENVIAR AVALIAÇÃO
                      </Button>

                      <div className="pt-6 text-center">
                        <p className="mb-4 text-sm text-gray-500">
                          Ou avalie usando
                        </p>
                        <div className="flex justify-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-200 bg-transparent transition-colors hover:bg-gray-50"
                          >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-200 bg-transparent transition-colors hover:bg-gray-50"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-200 bg-transparent transition-colors hover:bg-gray-50"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
