import NavigationBar from "./Components/NavigationBar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import CartSingle from "./pages/CartSingle";
import CartMultiple from "./Components/CartMultiple";
import UseReferenceHook from "./pages/UseReferenceHook";
import UseReducer from "./Components/useReducer";
// import Footer from "./Components/Footer";
import Skills from "./pages/Skills";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        {/* <hr /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Work" element={<Work />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<CartMultiple />}></Route>
          <Route path="/Hooks" element={<UseReferenceHook />}></Route>
          <Route path="/HookReducer" element={<UseReducer />}></Route>
        </Routes>
        {/* <hr /> */}
        {/* <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
