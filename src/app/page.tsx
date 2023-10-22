"use client";

import { About } from "./components/About";
import { Endereço } from "./components/Adress";
import { Avaliações } from "./components/Avaliacoes";
import { Banner } from "./components/Banner";
import { Fotos } from "./components/Fotos";
import { Marcas } from "./components/Marcas";
import { NavBar } from "./components/NavBar";
import { Pecas } from "./components/Pecas";
import { Qualidade } from "./components/Qualidade";
import { Service } from "./components/Services";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <>
      
      <NavBar/>
      {/* <Banner/> */}
      <About/>
      {/* <Qualidade/>

      <Service/>
      <Qualidade/>*/}

      <Pecas/>

      <Marcas/>
      <Fotos/>
      <Endereço/>
      <Avaliações/>
      <Footer/> 
      </>

    </main>
  )
}
