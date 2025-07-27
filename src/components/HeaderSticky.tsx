import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  scrollY?: number;
  className?: string;
}

export default function HeaderSticky({
  children,
  className,
  scrollY = 100,
}: Props) {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStickyHeader(scrollPosition > scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div
      className={`sticky top-[66px] z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out shadow-[0px_2px_15px_-2px_#0000001f]  ${
        showStickyHeader ? "translate-y-0" : "-translate-y-full"
      } ${className ? className : ""} `}
    >
      {children}
    </div>
  );
}
