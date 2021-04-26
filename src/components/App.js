import React from "react";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Home from "./Home";
import CreateArea from "./CreateArea";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/createpost" component={CreateArea} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
