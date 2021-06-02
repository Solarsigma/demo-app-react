import React from 'react'
import './Body.css'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Books from './subsections/Books'
import Mens from './subsections/Mens'
import Womens from './subsections/Womens'
import Children from './subsections/Children'
import ProductDetails from './components/ProductDetails'


const subsections = ["Subsection 1", "Subsection2", "Subsection 3"];

const subsecObj = subsections.map((subsec, i) => ({id: i, title: subsec}));


const Body = () => (

	<>
		<Books />
		<Mens />
		<Womens />
		<Children />
		<ProductDetails productName='book1' genre='book' />
	</>
);

export default Body