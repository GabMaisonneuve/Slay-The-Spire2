import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trailer from "@/components/Trailer";
import Classes from "@/components/Classes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trailer />
      <Classes />
      <Features />
      <Footer />
    </>
  );
}
