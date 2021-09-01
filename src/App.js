import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailPages from "pages/DetailPages";
import Examples from "pages/Examples";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPages}></Route>
        <Route exact path="/examples" component={Examples}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
