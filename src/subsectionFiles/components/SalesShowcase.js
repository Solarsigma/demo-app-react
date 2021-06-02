import React from 'react'
import Grid from '@material-ui/core/Grid';
import ItemTile from './ItemTile'






const SalesShowcase = function(props) {
	const {	products, genre, isBook, bookLinks } = props;

	const itemsObj = products.map((product, i) => ({id: i, name: product.title}));
	const imgArr = products.map((product) => (require(`../images/${genre}/${product.src}`)));

	return (
		<>
			<div style={{padding: 50}}>
				<Grid container spacing={3} justify="center" alignItems="center">
					{itemsObj.map( function(object) {
						const bookLink = isBook ? bookLinks[object.id] : null;
						return (
							<Grid item xs={4} key={object.id}>
								<ItemTile imgSrc={imgArr[object.id].default} name={object.name} genre={genre} isBook={isBook} bookLink={bookLink}/>
							</Grid>
						);
					})}
				</Grid>
			</div>
		</>
	);
}

export default SalesShowcase;