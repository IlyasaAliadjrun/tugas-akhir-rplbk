import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const BASE_URL = `https://my-json-server.typicode.com/IlyasaAliadjrun/api-shoes`;

function AddShoesDialog({ open, onClose, shoes, setShoes }) {
  const [id, setId] = useState(1);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/sepatu`, {
        id: id,
        image: image,
        nama: nama,
        harga: harga,
      })
      .then((res) => {
        setShoes([...shoes, res.data]);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Tambah Sepatu</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          padding: "8px 20px",
        }}
      >
        <TextField
          name="id"
          label="Id"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <TextField
          name="image"
          label="Image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <TextField
          name="nama"
          label="Nama"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <TextField
          name="harga"
          label="Harga"
          value={harga}
          onChange={(event) => setHarga(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddShoesDialog;
