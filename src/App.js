import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import IndexPage from './indexPage';
import HallymMuseum from "./hallymMuseum";
import JpStudy from "./jpStudy";
import Csquare from "./csquare";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="/hallymMuseum" element={<HallymMuseum/>} />
      <Route path="/jpStudy" element={<JpStudy/>} />
      <Route path="/csquare" element={<Csquare/>} />
    </Routes>
  </Router>
  );
}

export default App;
