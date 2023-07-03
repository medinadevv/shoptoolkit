import './App.css';
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Basket from "./Basket";
import Favorite from "./Favorite";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/product"} element={ <Product/> }/>
            <Route path={"/basket"} element={ <Basket/> }/>
            <Route path={"/favorite"} element={ <Favorite/> }/>
        </Routes>
    </div>
  );
}

export default App;
