import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Tarjeta = ({ datos }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    setPersonajes(datos);
  }, [datos]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {personajes !== undefined && personajes.length
        ? personajes.map((personaje, index) => (
            <CardActionArea key={index}>
              <CardMedia component="img" image={personaje.image} alt="Foto" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {personaje.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {personaje.gender}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))
        : "Loading..."}
      ,
    </Card>
  );
};

export default Tarjeta;
