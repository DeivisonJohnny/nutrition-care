import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PreviewForm() {
  const router = useRouter();
  const { formId } = router.query;

  const [LoadedComponent, setLoadedComponent] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof formId === "string") {
      import(`@/pages/pages-form-avaliation/${formId}/index.tsx`)
        .then((mod) => {
          setLoadedComponent(() => mod.default);
        })
        .catch((err) => {
          console.error("Erro ao carregar design:", err);
        });
    }
  }, [formId]);

  if (!LoadedComponent) {
    return <div className="p-10 text-center text-gray-800">Carregando...</div>;
  }

  return <LoadedComponent />;
}
