import {HashRouter, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import DownloadPage from "./download/DownloadPage";


function App() {
  return (
      <HashRouter basename='/'>
        <Route exact path='/' component={HomePage} />
        <Route path="/download" component={DownloadPage} />
      </HashRouter>
  );
}

export default App;
