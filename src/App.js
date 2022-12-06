import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./State/reducer/configStore";
import NavBar from "./Components/NavBar";
import { ClassVIII } from "./Components/ClassVIII";
import ClassIX from "./Components/ClassIX";
import ClassX from "./Components/ClassX";
import { CricketTeam } from "./Components/CricketTeam";
import "./App.css";

function App() {
  const localStore = configStore();
  return (
    <div className="main">
      <h1 className="text-center">Students</h1>
      <Provider store={localStore}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/8th" element={<ClassVIII />} />
            <Route path="/9th" element={<ClassIX />} />
            <Route path="/10th" element={<ClassX />} />
            <Route path="/cricTeam" element={<CricketTeam />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
