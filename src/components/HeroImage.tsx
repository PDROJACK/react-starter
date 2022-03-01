import { Button, Card, ImageList, ImageListItem, Paper } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import React, { useState } from "react";

type heroItemProp = {
  img: string;
  title: string;
};

const itemData: heroItemProp[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];

function HeroItem(props: { item: heroItemProp }) {
  return (
    <Paper>
        <img
        src={`${props.item.img}`}
        srcSet={`${props.item.img}`}
        width={1440}
        height={400}
        loading="lazy"/>
    </Paper>
  );
}

const HeroImage = () => {
    const [items, setitemData] = useState<heroItemProp[]>(itemData);

  return (
    <Carousel>
      { items.map( i => <HeroItem item={i} /> )}
    </Carousel>
  );
};

export default HeroImage;
