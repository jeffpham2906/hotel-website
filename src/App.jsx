import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Facilities from "./pages/facilities/Facilities";
import Rooms from "./pages/rooms/Rooms";
import ContactUs from "./pages/contact-us/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/facilities" element={<Facilities />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
