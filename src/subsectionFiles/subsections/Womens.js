import SalesShowcase from '../components/SalesShowcase'
import React from 'react'
import {DataContext} from '../../context/ProductContext'

class Womens extends React.Component { 

	static contextType = DataContext;

	render() {
		const {products} = this.context;

		const genre = "womens";

		return (
			<SalesShowcase products = {products.Womens} genre={genre} isBook={false}/>
		);
	}
}

export default Womens;