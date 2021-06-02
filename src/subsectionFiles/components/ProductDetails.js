import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Error404 from './Error404'
import {DataContext} from '../../context/ProductContext'
import '../css/productDetails.css'

const nums = [1,2,3,4,5,6];
const Genres = ['mens', 'womens', 'children', 'book'];

class ProductDetails extends React.Component { 

	static contextType = DataContext;

	render() {
		const {products, addCart, removeProduct, addedToCart} = this.context;

		const { match } = this.props;
		const productName = match.params.prod;
		const genre = match.params.genre;
		const truGenre = Genres.find(trugnr => genre === trugnr);

		console.log("Inside product details");
		if(truGenre) {
			const truItems = nums.map((num) => `${truGenre}${num}`);
			const truItem = truItems.find(truitm => productName === truitm);

			if(!truItem){
				return <Error404 />;
			}
		}
		else{
			return <Error404 />;
		}

		const imgAddr = require(`../images/${genre}/${productName}.png`);

		var prodContent = "";

		if (genre=='mens'){
			products.Mens.map(product => {
				if (product.title == productName){
					prodContent = product.content
				}
			})
		}else if (genre=='womens'){
			products.Womens.map(product => {
				if (product.title == productName){
					prodContent = product.content
				}
			})
		}else if (genre=='children'){
			products.Childrens.map(product => {
				if (product.title == productName){
					prodContent = product.content
				}
			})
		}else if (genre=='book'){
			products.Books.map(product => {
				if (product.title == productName){
					prodContent = product.content
				}
			})
		}

		return (
			<>
				<div className="details">
					<img src={imgAddr.default} alt="" className="prodImg"/>
					<div className='row'>
						<h2 className="prodTitle"> { productName }</h2>
						<p className="prodDesc"> {prodContent} </p>
						{addedToCart(productName)?
							<Button onClick={()=> addCart(productName, genre)} color='primary' variant='contained' size='large'>Add to Cart</Button>:
							<Button onClick={()=> removeProduct(productName)} color='primary' variant='contained' size='large'>Added</Button>
						}
					</div>
				</div>
				<Link to={`/${genre}`} className="backButton"><Button color='secondary' variant='contained'> Back </Button></Link>
				<hr/>
			</>
		);
	}
}

export default ProductDetails;