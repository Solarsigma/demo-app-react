import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const buttonStyle = makeStyles({
	backButton: {
		paddingLeft: 100,
	}
})

const Error404 = function() {
	const classes = buttonStyle()
	return (
			<div className={classes.backButton}>
			<h1>Whoops! You got the wrong page!</h1>
			<Link to="/"><Button variant='contained' color='secondary' size='large'>Go Home</Button></Link>
			</div>
	);
}

export default Error404