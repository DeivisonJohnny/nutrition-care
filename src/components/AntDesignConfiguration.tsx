import { useTheme } from "@/hooks/useTheme";
import { ReactNode } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, theme as anttheme } from "antd";

interface Props {
  children: ReactNode;
}

export default function AntDesignConfiguration({ children }: Props) {
  const { theme } = useTheme();

  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm:
            theme === "dark"
              ? anttheme.darkAlgorithm
              : anttheme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
