import { useState } from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle} />
      <AllRoutes toggle={toggle} setToggle={setToggle} />
      <Footer />
    </div>
  );
}

export default App;
