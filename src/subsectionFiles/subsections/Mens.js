import SalesShowcase from '../components/SalesShowcase'
import React from 'react'
import {DataContext} from '../../context/ProductContext'

class Mens extends React.Component { 

	static contextType = DataContext;

	render() {
		const {products} = this.context;
		const genre = "mens";

		return (
			<SalesShowcase products = {products.Mens} genre={genre} isBook={false}/>
		);
	}
}

export default Mens