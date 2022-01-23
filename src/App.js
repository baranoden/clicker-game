import { useState } from "react";
import "./App.css";

function App() {
  var workers = {
    products: 0,
    upgrades: {
      machine: {
        amount: 0,
        cost: 10,
        gps: 1,
        name: "machines",
      },
    },
  };
  function handleClick(e) {
    workers[e]++;
  }
  // const localizedWorkers = workers.toLocaleString("en-US");
  // const localizedProduct = workers[i].toLocaleString("en-US");
  // const localizedMachine = machine.toLocaleString("en-US");

  function upgradeCount() {
    setInterval(() => {
      for (i in workers.upgrades) {
        workers.products +=
          (workers.upgrades[i].amount * workers.upgrades[i].gps) / 5;
      }
    });
  }

  return (
    <div className="App">
      <div>Workers:</div>
      <div>Machine:</div>
      <div>Product:</div>
      <button onClick={handleClick}>Buy Worker</button>
      <button>Buy Machine</button>
    </div>
  );
}

export default App;
