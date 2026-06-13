import React from "react";
import { cn } from "../lib/utils";

export function SectionHeader({ label, title, description, align = "center", className }) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg prose-muted">{description}</p>
      )}
    </div>
  );
}
