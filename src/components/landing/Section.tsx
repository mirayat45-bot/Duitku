import { useReveal } from "@/hooks/use-reveal";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { ref, className: revealCn } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div ref={ref} className={`mx-auto max-w-7xl px-4 ${revealCn}`}>
        {(eyebrow || title || subtitle) && (
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
