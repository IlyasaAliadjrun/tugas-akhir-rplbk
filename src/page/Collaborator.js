import React from "react";
import Card from "../component/CardComponent";
import NavbarComponent from "../component/NavbarComponent";
import ilyasa from '../asset/ilyasa.jpg'
import anggi from '../asset/anggi.jpg'
import nisa from '../asset/nisa.jpg'
import fitri from '../asset/fitri.png'

function Collaborator() {
  return (
    <div>
      <NavbarComponent nText="Collaborator" />
      <div className="container container-lg">
        <h1 className="text-center pt-5">Website ini dibuat oleh: </h1>
        <div className="row row-cols-1 row-cols-md-4 g-5 m-5">
          <Card cTextTitle="Ilyasa Aliadjrun" cTextBody="Computer Engineering at Diponegoro University" cImage={ilyasa}/>
          <Card cTextTitle="Anggilia Nur Safitri" cTextBody="Computer Engineering at Diponegoro University" cImage={anggi}/>
          <Card cTextTitle="Khairun Nisa Maulani" cTextBody="Computer Engineering at Diponegoro University" cImage={nisa}/>
          <Card cTextTitle="Fitri Mardiana" cTextBody="Computer Engineering at Diponegoro University" cImage={fitri}/>
        </div>
      </div>
    </div>
  );
}

export default Collaborator;
