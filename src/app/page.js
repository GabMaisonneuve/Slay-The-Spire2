import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="trailer">
        <h2>Trailer</h2>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/watch?v=PW22jwFNxU8"
          title="Slay the Spire 2 Trailer"
          allowFullScreen
        ></iframe>
      </section>

      <Features />
      <Footer />
    </>
  );
}
