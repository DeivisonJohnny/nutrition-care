import { ReactElement, ReactNode, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  children: ReactNode;
  isCopy?: boolean;
}

export default function Clipboard({ children, isCopy = true }: Props) {
  const [open, setOpen] = useState(false);

  const getTextFromChildren = (node: ReactNode): string => {
    if (typeof node === "string" || typeof node === "number")
      return node.toString();
    if (Array.isArray(node)) return node.map(getTextFromChildren).join("");
    if (typeof node === "object" && node && "props" in node) {
      const element = node as ReactElement<{ children?: ReactNode }>;
      return getTextFromChildren(element.props.children);
    }
    return "";
  };

  const text = getTextFromChildren(children);
  const [content, setContent] = useState(text);

  function handleCopy() {
    if (!isCopy) return;

    setOpen(true);

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setContent("Copiado!");
      })
      .catch(() => {
        setContent("Erro ao copiar!");
      })
      .finally(() => {
        setTimeout(() => {
          setContent(text);
          setOpen(false);
        }, 1000);
      });
  }

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        onClick={(e) => {
          e.preventDefault();
          handleCopy();
        }}
        className=" w-full cursor-pointer truncate text-ellipsis text-left
 "
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
}
