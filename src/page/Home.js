import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../component/CardComponent";
import HeroComponent from "../component/HeroComponent";
import NavbarComponent from "../component/NavbarComponent";
import { Button, IconButton, List, Paper, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import AddShoesDialog from "../component/AddShoesDialog";

const BASE_URL = `https://my-json-server.typicode.com/IlyasaAliadjrun/api-shoes`;

function Home() {
  const [shoes, setShoes] = useState([]);
  const [newShoes, setNewShoes] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputan = useRef(null);

  console.log(shoes);

  useEffect(() => {
    async function getShoes() {
      await axios
        .get(`${BASE_URL}/sepatu`)
        .then((res) => {
          setShoes(res.data);
        })
        .catch((error) => console.log(error));
    }
    getShoes();
  }, []);

  const searchShoes = () => {
    let nama = inputan.current.value;
    if(shoes.length > 0 && shoes.length != 1){
      axios
      .get(`${BASE_URL}/sepatu?nama=${nama}`)
      .then((res) => {
        setShoes(res.data);
      })
      .catch((error) => console.log(error));
    }
    else{
      axios
        .get(`${BASE_URL}/sepatu`)
        .then((res) => {
          setShoes(res.data);
        })
        .catch((error) => console.log(error));
        console.log(shoes)
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <NavbarComponent nText="Home" />
      <div className="container container-lg">
        <div className="pb-5">
          <HeroComponent
            hText="Shoes & Co"
            hImage="https://i.etsystatic.com/28317189/r/il/805dd8/3600176721/il_fullxfull.3600176721_i0ac.jpg"
            hLongText="Sebuah website katalog sepatu"
            hButton="About Us"
            hLink="/About"
          />
        </div>
        <div>
          <h1 className="pb-5 pt-2 text-center">Katalog Sepatu Kami</h1>
        </div>
        <div className="row pt-5">
          <label for="search" className="col-1 text-center mb-3 fs-4">
            Search :
          </label>
          <div className="col-3">
            <input
              id="search"
              type="text"
              className="form-control form-control-solid text-center"
              placeholder="Search By Name"
              ref={inputan}
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary" onClick={searchShoes}>Cari</button>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-2">
            <Typography variant="h5">Tambah Sepatu</Typography>
          </div>
          <div className="col-1">
            <IconButton onClick={openDialog}>
              <AddCircle />
            </IconButton>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-5 mt-2 mb-5">
          {shoes.map((dt) => (
            <Card
              key={dt.id}
              cImage={dt.image}
              cTextTitle={dt.nama}
              cTextBody={`USD$${dt.harga}`}
            />
          ))}
          {newShoes.map((dt) => (
            <Card
              key={dt.id}
              cImage={dt.image}
              cTextTitle={dt.nama}
              cTextBody={`USD$${dt.harga}`}
            />
          ))}
        </div>
      </div>
      {isDialogOpen && (
        <AddShoesDialog
          open={isDialogOpen}
          onClose={closeDialog}
          shoes={newShoes}
          setShoes={setNewShoes}
        />
      )}
    </div>
  );
}

export default Home;
