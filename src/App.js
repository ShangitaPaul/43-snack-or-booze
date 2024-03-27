import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Route exact path="/" render={() => <Home snacks={snacks} />} />
          <Route exact path="/snacks" render={() => <Menu snacks={snacks} title="Snacks" />} />
          <Route path="/snacks/:id" render={() => <Snack items={snacks} cantFind="/snacks" />} />
          <Route render={() => <p>Hmmm. I can't seem to find what you want.</p>} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
