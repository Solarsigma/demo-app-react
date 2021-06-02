import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from './svg/bars-solid.svg'
import Close from './svg/close.svg'
import {DataContext} from './context/ProductContext'

class Header extends React.Component { 

  static contextType = DataContext;

  state = {
        toggle: false
  }
  
  menuToggle = () =>{
      this.setState({toggle: !this.state.toggle})
  }

  render() {
    const {cart} = this.context;
    const {toggle} = this.state;

    return (
      <header className="header">
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20"/>
        </div>
        <div class="logo">
          <h1><Link to="/">Amazaun</Link></h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/mens">Mens</Link></li>
            <li><Link to="/womens">Womens</Link></li>
            <li><Link to="/children">Childrens</Link></li>
            <li><Link to="/book">Books</Link></li>
            <li className="close" onClick={this.menuToggle}>
                <img src={Close} alt="" width="20"/>
            </li>
          </ul>
        </nav>
        <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <a href="#" class="fa fa-shopping-cart"></a>
            </Link>
        </div>
      </header>
    );
  }
}

export default Header;
