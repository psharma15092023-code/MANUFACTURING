import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Quote from "./pages/Quote";

function App() {
return (
<> <Navbar />

```
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>

  <Footer />
</>


);
}

export default App;
