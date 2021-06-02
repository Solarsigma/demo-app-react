import SalesShowcase from '../components/SalesShowcase'
import React from 'react'
import {DataContext} from '../../context/ProductContext'
		
class Books extends React.Component { 

	static contextType = DataContext;
	render() {
		window.digitalData.page.pageName = "Books page"; 

		const {products} = this.context;
		const genre = "book";
		const tempArr = [1,2,3,4,5,6]
		const itemsArr = tempArr.map((num) => (`${genre}${num}`))
		const bookLinks = products.Books.map((product) => (product.downloadlink))
		return (
			<SalesShowcase products = {products.Books} genre={genre} isBook={true} bookLinks={bookLinks}/>
		);
	}
}

export default Books