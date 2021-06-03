import React from 'react'
import "./placeorder.css"
import {DataContext} from '../context/ProductContext'

class OrderPlaced extends React.Component { 

	static contextType = DataContext;

    componentDidMount(){
        this.context.placeOrder();
    }

	render() {
		const {placeOrder} = this.context;
        window.digitalData.page.pageName = "Order placed page";
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
