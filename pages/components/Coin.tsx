import React from "react";
import Image from "next/image";
import { CoinType } from "../types";

function Coin(props: CoinType) {
  const {name, icon, price, symbol} = props;
  return (
    <div className="coin">
      <h1>Name: {name}</h1>
      <Image src={icon} alt={name} width="100" height="100"/>
      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol} </h3>
    </div>
  );
}

export default Coin;
