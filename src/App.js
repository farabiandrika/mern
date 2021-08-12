import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "elements/pages/LandingPage";
import DetailPages from "elements/pages/DetailPages";
import Examples from "elements/pages/Examples";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPages}></Route>
        <Route exact path="/examples" component={Examples}></Route>
      </Router>
    </div>
  );
}

export default App;
