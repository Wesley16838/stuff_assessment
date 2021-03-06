import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homePage";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
