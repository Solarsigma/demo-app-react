import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Routes, Route, Link } from 'react-router-dom'
import {DataContext} from '../../context/ProductContext'
import '../css/ItemTiles.css'

class ItemTile extends React.Component { 

	static contextType = DataContext;

	render() {
		const { imgSrc, name, genre, ...bookProps } = this.props;

    const { isBook, bookLink } = bookProps;
    console.log(bookLink);
    console.log(`Name: ${name}`);
    console.log(`Genre: ${genre}`);
    const {products, addCart, removeProduct, addedToCart} = this.context;

		return (
			<Card className="root">
        <Link to={`/${genre}/${name}`}>
          <CardActionArea className="actionArea">
            <CardMedia
              className="media"
              image = {imgSrc}
              title = {name}
            />
            <CardContent className="content">
              <h3>{name}</h3>
            </CardContent>
          </CardActionArea>
        </Link>
          <CardActions>
            {addedToCart(name) ?
            <Button onClick={()=> addCart(name, genre)} size="small" variant='contained'>
              Add to Cart
            </Button>:
            <Button onClick={()=> removeProduct(name)} size="small" variant='contained'>
              Added
            </Button>
            }
            
            {isBook ?
              <Link to={bookLink} target="_blank">
                <Button variant='contained' size='small' color='primary'>
                  Download
                </Button>
              </Link> : null
              }
          </CardActions>
        </Card>
		);
	}
}

export default ItemTile;