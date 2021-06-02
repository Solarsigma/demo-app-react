import SalesShowcase from '../components/SalesShowcase'
import React from 'react'
import {DataContext} from '../../context/ProductContext'

class Books extends React.Component { 

	static contextType = DataContext;
	render() {
		const {products} = this.context;
		const genre = "book";
		const bookLinks = products.Books.map((product) => (product.downloadlink))
		return (
			<SalesShowcase products = {products.Books} genre={genre} isBook={true} bookLinks={bookLinks}/>
		);
	}
}

export default Books