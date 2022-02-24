import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";

function CineCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="250"
          image="https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?fit=bounds&format=jpg&width=960"
        />
        <CardContent>4 5 6</CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CineCard;
