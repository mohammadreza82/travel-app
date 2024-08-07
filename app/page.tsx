import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </React.Fragment>
  );
}
