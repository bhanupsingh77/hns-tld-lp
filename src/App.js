import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import TldCategory from "./components/TldCategory.js";
import Sld from "./components/Sld.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={TldCategory} />
          <Route path="/tld" component={TldCategory} />
          <Route path="/sld" component={Sld} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
