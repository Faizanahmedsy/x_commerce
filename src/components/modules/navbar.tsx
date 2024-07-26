"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItems } from "@/constants";
import { cn } from "@/lib/utils";
import { Earth, Loader2, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_CONFIG } from "../../../site.config";
import { Icons } from "../icons";
import dynamic from "next/dynamic";

import Image from "next/image";
// import { DesktopNavbar } from "./navbar-dropdown";

const DesktopNavbar = dynamic(
  () => import("./navbar-dropdown").then((mod) => mod.DesktopNavbar),
  {
    ssr: false,
    loading: () => (
      <div className="h-full flex justify-center items-center">
        <Loader2 className="mr-2 h-[30%] w-[30%] animate-spin" />
      </div>
    ),
  }
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between  md:px-32 px-8 py-3 fixed top-0 right-0 left-0 dark:bg-black bg-white z-50">
      <div className="flex justify-between items-center gap-2 font-bold text-brand uppercase">
        <div className="flex flex-col text-s">
          <div>{SITE_CONFIG.brandName}</div>
        </div>
      </div>
      {/* <SparklesText text="Future Globe" className="text-sm"  /> */}
      <div className="flex items-center">
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>
        {/* <ThemeToggle /> */}

        <div className={cn("block sm:!hidden")}>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left" className="!px-0">
              <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Overview
                  </h2>
                  <div className="space-y-1">
                    <DashboardNav items={NavItems} setOpen={setOpen} />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function DashboardNav({
  items,
  setOpen,
}: {
  items: { title: string; icon?: any; href: string; disabled?: boolean }[];
  setOpen?: (open: boolean) => void;
}) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[(item.icon as keyof typeof Icons) || "arrowRight"];

        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-200 hover:text-black dark:hover:text-black",
                  path === item.href
                    ? `bg-brand-primary dark:text-white text-white hover:bg-company dark:hover:bg-company hover:text-white dark:hover:text-white`
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
