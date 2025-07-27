import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PlanCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  period: string;
  popular?: boolean;
  icon: LucideIcon;
  features: string[];
  limitations?: string[];
  cta: string;
  highlight?: boolean;
}

export default function PlanCard({
  name,
  description,
  price,
  originalPrice,
  period = "mês",
  popular = false,
  icon: IconComponent,
  features,
  limitations = [],
  cta,
  highlight = false,
}: PlanCardProps) {
  return (
    <Card
      className={`relative h-full transition-all duration-300 hover:shadow-xl ${
        highlight
          ? "border-2 border-blue-500 shadow-lg scale-105"
          : "border border-gray-200 hover:border-blue-300"
      } 
     h-full backface-hidden bg-gray-900/50 border border-gray-800 backdrop-blur-sm justify-center rounded-xl
     w-[28%]
      `}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold">
            <Star className="w-3 h-3 mr-1" />
            Mais Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <div
          className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
            highlight ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <IconComponent
            className={`w-6 h-6 ${
              highlight ? "text-blue-600" : "text-gray-600"
            }`}
          />
        </div>

        <CardTitle className="text-xl font-bold text-gray-300">
          {name}
        </CardTitle>
        <p className="text-gray-200 text-sm">{description}</p>

        <div className="mt-4">
          <div className="flex items-center justify-center gap-2">
            {originalPrice && (
              <span className="text-lg text-gray-100 line-through">
                R$ {originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold text-white">R$ {price}</span>
          </div>
          <span className="text-gray-200">por {period}</span>
          {originalPrice && (
            <div className="mt-1">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                Economize{" "}
                {Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Button
          className={`w-full mb-6 ${
            highlight
              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-gray-300 "
              : ""
          }`}
          variant={highlight ? "default" : "outline"}
          size="lg"
        >
          {cta}
        </Button>

        <div className="flex flex-col items-center">
          <div className="flex gap-2 flex-row px-2.5 w-full px-2.5 ">
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-[14px]">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {limitations.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-600 text-sm mb-2">
                Limitações:
              </h4>
              <ul className="space-y-1">
                {limitations.map((limitation, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <span className="w-4 h-4 text-gray-400 mt-0.5">•</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
