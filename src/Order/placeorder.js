import React from 'react'
import "./placeorder.css"
import {DataContext} from '../context/ProductContext'

class OrderPlaced extends React.Component { 

	static contextType = DataContext;

    componentDidMount(){
        this.context.clearCart();
    }

	render() {
		const {clearCart} = this.context;
        
		return (
			<>
                <div className="a">
                    <h1>Your order has been placed</h1>
                </div>
                <hr />
            </>
		);
	}
}

export default OrderPlaced;
