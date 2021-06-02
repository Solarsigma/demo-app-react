import SalesShowcase from '../components/SalesShowcase'
import React from 'react'
import {DataContext} from '../../context/ProductContext'

class Children extends React.Component { 

	static contextType = DataContext;

	render() {
		const {products} = this.context;
		const genre = "children";

		return (
			<SalesShowcase products = {products.Childrens} genre={genre} isBook={false}/>
		);
	}
}

export default Children