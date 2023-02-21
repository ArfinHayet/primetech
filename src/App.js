import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Category from './screens/Category'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <                    Home/>
               </Route>

      <Route path="/product/:id"       >
        <Product />
      </Route>


      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/category/:cate">
        <Category />
      </Route>
      
    </Router>
  );
}

export default App;
