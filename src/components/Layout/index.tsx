import { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { SidebarDashboard } from "../dashboard/SideBar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { ThemeProvider } from "../ui/theme-provider";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const isLandingPage = pathname === "/";
  const isLoginPage = pathname === "/auth/login";
  const isSignupPage = pathname === "/auth/signup";
  const isPreviewPageForm = pathname?.startsWith("/preview/") ?? false;

  const showSidebar =
    !isLandingPage && !isLoginPage && !isSignupPage && !isPreviewPageForm;

  return (
    <Container className="bg-[#f3f3f3] dark:bg-background">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          {showSidebar ? (
            <>
              <SidebarDashboard />
              <SidebarInset>
                <Header />
                <Content className="top-[64px_!important] z-[1]">
                  {children}
                </Content>
              </SidebarInset>
            </>
          ) : (
            <>
              <Header />
              <Content>{children}</Content>
            </>
          )}
        </SidebarProvider>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
`;

const Content = styled.section`
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
`;
