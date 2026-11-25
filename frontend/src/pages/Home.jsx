import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RfqSection } from "@/components/site/FinalCTA";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Manufacture } from "@/components/site/Manufacture";
import { Process } from "@/components/site/Process";
import { Quality } from "@/components/site/Quality";
import { Services } from "@/components/site/Services";
import { VendorRegistration } from "@/components/site/VendorRegistration";
import { WhatWeMake } from "@/components/site/WhatWeMake";

export const HomePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const target = state?.scrollTo;

  useEffect(() => {
    document.title = "Lucky Engineering Works | Precision machined components, Vasai";
  }, []);

  // Arriving from another page with a section to jump to.
  useEffect(() => {
    if (!target) return;
    // Repeat once fonts and images have settled so the section lands in place.
    const go = () => document.getElementById(target)?.scrollIntoView();
    requestAnimationFrame(go);
    document.fonts?.ready.then(go);
    setTimeout(go, 350);
    navigate("/", { replace: true, state: null });
  }, [target, navigate]);

  return (
    <>
      <Hero />
      <WhatWeMake />
      <Services />
      <Process />
      <Manufacture />
      <Quality />
      <Gallery />
      <VendorRegistration />
      <RfqSection />
    </>
  );
};
