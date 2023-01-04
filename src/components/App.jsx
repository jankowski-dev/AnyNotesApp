import "./../scss/main.scss";
import "./../scss/media.scss";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePageContainer from "./HomePageContainer";
import StorageContainer from "./StorageContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/storage" element={<StorageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
