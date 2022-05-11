import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";
import PlaceHolder from "../assets/placeholder.png";

const Tarjeta = ({id, name, gender, image, location, origin, species, status }) => {

  const [active, setActive] = useState(false);

  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea onClick={() => setActive(!active)}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" sx={{ minHeight: 65 }}>
            {name} ({status})
          </Typography>
          {
            active && (
              <Typography variant="body2" color="text.secondary">
                <List>
                  <ListItem>
                    Genero: {gender}
                  </ListItem>
                  <ListItem>
                    Ubicación: {location.name}
                  </ListItem>
                  <ListItem>
                    Origen: {origin.name}
                  </ListItem>
                  <ListItem>
                    Especie: {species}
                  </ListItem>
                </List>
              </Typography>
            )
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Tarjeta.defaultProps = {
  name: "Nombre misterioso",
  gender: "Género desconocido",
  image: PlaceHolder,
}

export default Tarjeta;
