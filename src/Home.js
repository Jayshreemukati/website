import React, { useState } from "react";
import Card from "./Card";

export default function Home() {
  const [data, setData] = useState([{ cardtitle: "Metro Women Wedge Heel Sandal", cardtext: `Sole: Polyurethane
  Closure: Backstrap
  Fit Type: Regular
  Shoe Width: Medium
  Material:SYNTHETIC
  Lifestyle:Casual
  Heel Height:3
  Care Instructions: Rotate your pair of shoes once every other day, allowing them to de-odorize and retain their shapes.Use Shoe bags to prevent any stains or mildew`, Image: "https://m.media-amazon.com/images/I/61eLO+h5xZL._UL1500_.jpg" }]);

  return (
    <div>
      {data.map((value) => {
        return (
          <Card
            cardtitle={value.cardtitle}
            cardtext={value.cardtext}
            Image={value.Image}
          />
          
        );
      })}
    </div>
  );
}
