import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import DownloadPage from "./download/DownloadPage";


function App() {
  return (
      <HashRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path="/download" element={<DownloadPage />} />
          </Routes>
      </HashRouter>
  );
}

export default App;
