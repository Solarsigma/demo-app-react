import React from 'react'
import { Link } from 'react-router-dom';
import mensImage from '../images/Main/mens.jpg'
import './cart.css'
import {DataContext} from '../context/ProductContext'

class Cart extends React.Component { 

	static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

	render() {
        window.digitalData.page.pageName = "Cart page"; 

		const {cart,increase,reduction,removeProduct,total} = this.context;
        const imgArr = cart.map((product) => (require(`../subsectionFiles/images/${product.genre}/${product.src}`)));

        console.log(imgArr);
        var cartEmpty = true;
        if (cart.length>0){
            cartEmpty = false;
        }
        console.log("Empty cart");
        console.log(cartEmpty);
		return (
			<>  
            {
                cart.map((item, i) => (
                    <div className="cart" key={i}>
                        <img src={imgArr[i].default} alt="Notfound" width="160"/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price*item.count}</span>
                            </div>
                            <p>Excepteur sint occaecat cupidatat non proident</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                            <div className="amount">
                                <button className="count" onClick={() => reduction(item.uid)}> - </button>
                                <span>{item.count}</span>
                                <button className="count" onClick={() => increase(item.uid)}> + </button>
                            </div>  
                        </div>
                        <div className="delete" onClick={() => removeProduct(item.title)}>X</div>
                    </div>
                ))
            }
            {cartEmpty ?
                <div className="totalAmount">
                    <h1>Cart is Empty</h1>
                    <Link to="/">Go shop</Link>
                </div>:
                <div className="totalAmount">
                    <h3>Total : ${total}</h3>
                    <Link to="/payment">Place your order</Link>
                </div>
            }
                <hr/>
            </>
		);
	}
}

export default Cart;