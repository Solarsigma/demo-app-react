import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
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
    const {products, addCart} = this.context;

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
            <Button onClick={()=> addCart(name, genre)} size="small" variant='contained'>
              Add to Cart
            </Button>
            {isBook ?
              <a href={bookLink} target='blank'>
                <Button variant='contained' size='small' color='primary'>
                  Download
                </Button>
              </a> : null
              }
          </CardActions>
        </Card>
		);
	}
}

export default ItemTile;