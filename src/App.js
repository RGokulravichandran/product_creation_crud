import "./App.css";
import ButtonAppBar from "./Components/AppBar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Mobiles from "./Components/Mobiles";
import PageNotFound from "./Components/PageNotFound";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Mobiles />} />
        <Route path="/:id/:modelId" element={<Edit />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
