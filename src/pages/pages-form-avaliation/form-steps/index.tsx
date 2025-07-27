"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

function EvaluationForm({
  onStepChange,
}: {
  onStepChange: (step: number) => void;
}) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"next" | "back">("next");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    avaliacao: 0,
    comentarios: "",
    recomendaria: "",
  });

  const handleNext = () => {
    setDirection("next");
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection("back");
    setStep((prev) => prev - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating: number) => {
    setFormData({ ...formData, avaliacao: rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Avaliação enviada:", formData);
    alert("Obrigado pela sua avaliação!");
  };

  const slideVariants = {
    initial: (direction: "next" | "back") => ({
      x: direction === "next" ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    animate: () => ({
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { type: "spring" as const, stiffness: 130, damping: 15 },
    }),
    exit: (direction: "next" | "back") => ({
      x: direction === "next" ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  useEffect(() => {
    onStepChange(step);
  }, [step, onStepChange]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative min-h-[350px] overflow-hidden"
    >
      <AnimatePresence mode="wait" custom={direction}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium text-black dark:text-white">
                Nome completo
              </Label>
              <div className="relative">
                <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="h-12 pl-10 text-gray-900 dark:text-gray-300"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-black dark:text-white">
                Email
              </Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="h-12 text-gray-900 dark:text-gray-300"
                placeholder="seu@email.com"
                required
              />
            </div>
            <Button
              type="button"
              onClick={handleNext}
              className="mt-6 h-12 w-full cursor-pointer"
            >
              Próximo
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
            <div className="space-y-4">
              <Label className="text-sm font-medium text-black dark:text-white">
                Como você avalia nosso atendimento?
              </Label>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="transition-colors"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= formData.avaliacao
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-muted-foreground text-center text-sm">
                {formData.avaliacao === 0 && "Clique nas estrelas para avaliar"}
                {formData.avaliacao === 1 && "Muito insatisfeito"}
                {formData.avaliacao === 2 && "Insatisfeito"}
                {formData.avaliacao === 3 && "Neutro"}
                {formData.avaliacao === 4 && "Satisfeito"}
                {formData.avaliacao === 5 && "Muito satisfeito"}
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-black dark:text-white">
                Você recomendaria nossos serviços?
              </Label>
              <div className="flex space-x-4">
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="sim"
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-black dark:text-white">
                    Sim
                  </span>
                </label>
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="nao"
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-black dark:text-white">
                    Não
                  </span>
                </label>
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="talvez"
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-black dark:text-white">
                    Talvez
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap-reverse justify-between gap-2">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="h-12 w-full cursor-pointer bg-transparent opacity-70 hover:opacity-100"
              >
                Voltar
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="h-12 w-full cursor-pointer"
                disabled={formData.avaliacao === 0}
              >
                Próximo
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium text-black dark:text-white">
                Comentários e sugestões
              </Label>
              <div className="relative">
                <MessageSquare className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none pl-10 text-gray-900 dark:text-gray-300"
                  placeholder="Conte-nos sobre sua experiência e como podemos melhorar..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap-reverse justify-between gap-2">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="h-12 w-full cursor-pointer bg-transparent opacity-70 hover:opacity-100"
              >
                Voltar
              </Button>
              <Button
                type="submit"
                className="h-12 w-full cursor-pointer bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Enviar Avaliação
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

interface Props {
  containerWidth: number;
}

export default function FormStepsForAvaliations({ containerWidth }: Props) {
  const getLeftContent = (step: number) => {
    switch (step) {
      case 1:
        return {
          title: "Seus dados pessoais",
          description:
            "Essas informações são usadas para entrarmos em contato caso necessário e personalizar sua experiência de atendimento.",
        };
      case 2:
        return {
          title: "Conte-nos mais sobre sua experiência",
          description:
            "Avalie nosso atendimento de forma honesta. Sua nota nos ajuda a identificar pontos de melhoria e reconhecer bons profissionais.",
        };
      case 3:
        return {
          title: "Detalhes fazem a diferença",
          description:
            "Seus comentários específicos nos permitem entender exatamente o que funcionou bem e o que pode ser aprimorado no atendimento.",
        };
      default:
        return {
          title: "Avaliação de Atendimento",
          description: "Sua opinião nos ajuda a melhorar nossos serviços.",
        };
    }
  };

  const [currentStep, setCurrentStep] = useState(1);

  console.log(
    "🚀 ~ FormStepsForAvaliations ~ containerWidthaaa:",
    containerWidth,
  );

  const pagePath = usePathname();
  console.log(
    "🚀 ~ FormStepsForAvaliations ~ pagePath:",
    pagePath.startsWith("/form-custom"),
  );

  const whatContainer = pagePath.startsWith("/form-custom")
    ? "@container-normal"
    : "@container";
  const widthContainer = pagePath.startsWith("/form-custom")
    ? `w-[${containerWidth}px]`
    : "w-full";

  return (
    <div
      className={`${whatContainer} ${widthContainer} `}
      style={{ minWidth: "100%" }}
    >
      <div className="flex min-h-screen w-full">
        <div className="dark:bg-background relative hidden flex-col items-center justify-center overflow-hidden bg-[#fefefe] @lg:flex @lg:w-1/2">
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-black dark:text-white">
            <h1 className="mb-4 text-center text-4xl font-bold">
              {getLeftContent(currentStep).title}
            </h1>
            <p className="max-w-md text-center text-xl text-black dark:text-white">
              {getLeftContent(currentStep).description}
            </p>
          </div>

          <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-black/10 blur-xl dark:bg-white/5" />
          <div className="absolute right-20 bottom-20 h-48 w-48 rounded-full bg-black/10 blur-xl dark:bg-white/5" />
          <div className="absolute top-[20px] left-[50px] h-24 w-24 rounded-full bg-black/10 blur-xl dark:bg-white/5" />
          <div className="absolute top-1/2 left-1/5 h-24 w-24 rounded-full bg-black/10 blur-xl dark:bg-white/5" />
        </div>

        <div className="dark:bg-background flex w-full items-center justify-center bg-[#fefefe] p-8 @lg:w-1/2">
          <div className="w-full max-w-md space-y-8">
            <div className="mb-8 text-center @lg:hidden">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-black dark:text-white">
                Avaliação de Atendimento
              </h1>
              <p className="text-muted-foreground">Sua opinião é importante</p>
            </div>

            <div className="space-y-6">
              <div className="hidden @lg:block">
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Avaliação
                </h2>
                <p className="text-muted-foreground mt-2">
                  Conte-nos sobre sua experiência
                </p>
              </div>

              <div className="mb-6 flex justify-center space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-green-600 to-blue-600"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <div onLoad={() => setCurrentStep(1)}>
                <EvaluationForm onStepChange={setCurrentStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
