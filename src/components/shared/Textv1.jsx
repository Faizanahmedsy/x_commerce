import { cn } from "@/lib/utils";
import React from "react";

export default function TextV1({ children, className }) {
  return (
    <div
      className={cn(
        "md:text-6xl text-2xl font-medium text-blue-900",
        className
      )}
    >
      {children}
    </div>
  );
}
