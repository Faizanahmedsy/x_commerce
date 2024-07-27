import { cn } from "@/lib/utils";
import React from "react";

export default function H2({ children, className }) {
  return (
    <div
      className={cn(
        "text-4xl font-extrabold text-blue-900 my-10 md:m-10  md:p-2",
        className
      )}
    >
      {children}
    </div>
  );
}
