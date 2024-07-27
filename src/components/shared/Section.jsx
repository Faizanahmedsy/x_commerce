import { cn } from "@/lib/utils";
import React from "react";

export default function Section({ children, className }) {
  return <section className={cn("md:px-32", className)}>{children}</section>;
}
