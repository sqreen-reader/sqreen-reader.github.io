import {HashRouter, Route} from "react-router-dom";
import HomePage from "./home/HomePage";

function App() {
  return (
      <HashRouter basename='/'>
        <Route exact path='/' component={HomePage} />
      </HashRouter>
  );
}

export default App;
