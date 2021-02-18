import React, { useState, useEffect } from "react";

import { MdMonetizationOn, MdLocalAtm } from "react-icons/md";

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

      // console.log(data);

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
                  <td>{item.last_updated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data</td>
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
