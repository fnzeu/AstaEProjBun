import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import WelcomePage from "./screens/WelcomePage";
import Navbar from "./components/Navbar";
import Login from "./screens/LoginPage";
import ProductsPage from "./screens/ProductsPage";
import Register from "./screens/RegisterPage";
import F1Grid from "./screens/F1Grid";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ProductsPage">
          <ProductsPage />
        </Route>
        <Route path="/RegisterPage">
          <Register />
        </Route>
        <Route path="/F1Grid">
          <F1Grid />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
