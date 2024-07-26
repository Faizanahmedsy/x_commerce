import Navbar from "@/components/modules/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="mt-16">{children}</main>
    </>
  );
}
