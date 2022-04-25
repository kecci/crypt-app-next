import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/Coin";
import { CoinType } from "../types";

const Home: NextPage = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin: CoinType) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin.."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin: CoinType) => {
          return (
            <Coin
              id={coin.id}
              key={coin.id}
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home
