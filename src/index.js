import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import Main from './Main/main'
import Mens from './subsectionFiles/subsections/Mens'
import Womens from './subsectionFiles/subsections/Womens'
import Children from './subsectionFiles/subsections/Children'
import Books from './subsectionFiles/subsections/Books'
import Singlebook from './subsectionFiles/subsections/Singlebook'
import Cart from './Cart/cart'
import OrderPlaced from './Order/placeorder'
import ProductDetails from './subsectionFiles/components/ProductDetails'
import Error404 from './subsectionFiles/components/Error404'
import DataProvider from './context/ProductContext'

ReactDOM.render(
  <DataProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/mens" component={Mens}></Route>
        <Route path="/womens" component={Womens}></Route>
        <Route path="/children" component={Children}></Route>
        <Route path="/book" exact component={Books}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/payment" component={OrderPlaced}></Route>
        <Route path="/books/:prod" component={Singlebook}></Route>
        <Route path="/:genre/:prod" component={ProductDetails}></Route>
        <Route path="*" component={Error404}></Route>
      </Switch>
      {/* <Main/> */}
      <Footer id="Demo App - Walmart"/>
    </Router>
  </DataProvider>,
  document.getElementById('root')
);
