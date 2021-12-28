import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Preloader, Oval } from "react-preloader-icon";

import {
  MdMonetizationOn,
  MdLocalAtm,
  MdTrendingUp,
  MdTrendingDown,
} from "react-icons/md";

const SomeComponent = () => (
  <Preloader
    use={Oval}
    size={32}
    strokeWidth={8}
    strokeColor="#FFFFFF"
    duration={800}
  />
);

function CryptocurrencyApp() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=25&order=market_cap_desc",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": `${process.env.REACT_APP_cryptoAppKey}`,
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
          },
        }
      );

      const data = await resp.json();

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mb-5 mt-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cryptocurrency App</title>
        <meta name="description" content="Cryptocurrency App Page" />
      </Helmet>
      <div className="col-12 bg-dark text-warning text-center p-3 mb-2 rounded">
        <h1 className="font-italic">
          <MdMonetizationOn /> Cryptocurrency App <MdLocalAtm />
        </h1>
      </div>
      <div class="col-12">
        <h2
          className="text-center p-2"
          style={{ fontFamily: "Courier New, monospace" }}
        >
          Top 25 Cryptocurrencies price info provided by CoinGecko API
        </h2>
      </div>
      <div className="col-12 table-responsive">
        <table className="table table-dark text-center rounded">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cryptocurrency</th>
              <th scope="col">Price (US$)</th>
              <th scope="col">Price change 24h (%)</th>
              <th scope="col">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {info.length > 0 ? (
              info.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.market_cap_rank}</th>
                  <td>
                    <img
                      src={item.image}
                      style={{ maxHeight: "20px" }}
                      alt={item.name}
                    />{" "}
                    {item.name}{" "}
                    <span className="text-secondary">
                      {item.symbol.toUpperCase()}
                    </span>
                  </td>
                  <td>{item.current_price}</td>
                  <td
                    className={`${
                      Number(item.price_change_percentage_24h) > 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {item.price_change_percentage_24h.toFixed(2)}
                    &nbsp;
                    {Number(item.price_change_percentage_24h) > 0 ? (
                      <MdTrendingUp />
                    ) : (
                      <MdTrendingDown />
                    )}
                  </td>
                  <td>{item.last_updated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="2">
                  <SomeComponent />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="invisible mb-5">Just an invisible container</div>
    </div>
  );
}

export default CryptocurrencyApp;
