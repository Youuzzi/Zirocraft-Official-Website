"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MenuDisclosure({ children, className }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const details = detailsRef.current;
    if (details) details.open = false;

    function closeOnOutsideClick(event: PointerEvent) {
      if (details && !details.contains(event.target as Node)) details.open = false;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && details?.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [pathname]);

  return (
    <details
      ref={detailsRef}
      className={className}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) {
          detailsRef.current?.removeAttribute("open");
        }
      }}
    >
      {children}
    </details>
  );
}
