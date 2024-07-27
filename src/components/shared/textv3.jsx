import { cn } from "@/lib/utils";
import React from "react";

export default function TextV3({ children, className }) {
  return (
    <div className={cn("md:text-2xl font-medium text-blue-900", className)}>
      {children}
    </div>
  );
}
