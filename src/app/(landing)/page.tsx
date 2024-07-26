import Products from "@/components/modules/Products";
import Section from "@/components/shared/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section className="py-10 bg-amber-100">
        <h1 className="text-4xl font-bold text-center">Shop Fullfilment</h1>
      </Section>
      <Section className="py-5">
        <Products />
      </Section>
    </>
  );
}
