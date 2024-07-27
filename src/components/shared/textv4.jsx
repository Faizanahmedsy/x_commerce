import { cn } from "@/lib/utils";
import React from "react";

export default function TextV4({ children, className }) {
  return (
    <div className={cn("md:text-xl font-medium text-blue-900", className)}>
      {children}
    </div>
  );
}
