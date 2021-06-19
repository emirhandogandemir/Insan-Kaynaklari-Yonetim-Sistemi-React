import "./App.css";
import Dashboard from "./layouts/dashboard/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/navi/Navi";

import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Headerr";


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f2f2f2" }}>
      <Navi />
      <Header />

      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
