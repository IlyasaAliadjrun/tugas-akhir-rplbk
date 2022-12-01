import React from "react";
import HeroComponent from "../component/HeroComponent";
import NavbarComponent from "../component/NavbarComponent";

function About() {
  return (
    <div>
      <NavbarComponent nText="About" />
      <div className="container container-lg">
        <HeroComponent
          hText="About this website"
          hImage="https://i.etsystatic.com/28317189/r/il/805dd8/3600176721/il_fullxfull.3600176721_i0ac.jpg"
          hLongText="Shoes & Co adalah website yang diperuntukkan untuk kepentingan praktikum rekayasa perangkat lunak berbasis komponen. Di dalamnya terdapat halaman yang menyajikan katalog sepatu dari berbagai merek beserta harganya"
          hButton="Home"
          hLink="/"
        />
      </div>
    </div>
  );
}

export default About;


