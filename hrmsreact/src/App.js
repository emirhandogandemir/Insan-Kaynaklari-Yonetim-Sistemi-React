
import "./App.css";

import Dashboard from "./layouts/dashboard/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import Navi from "./layouts/navi/Navi";
import { Container } from "semantic-ui-react";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Headerr";
import { Route } from "react-router";
import Home from "./layouts/homepage/Home";

function App() {
  return (
    <div className="App">
      <Navi/>
<Header/>
<Container className="main">
<Dashboard/>
</Container>
<Footer/>


    </div>
  );
}

export default App;
