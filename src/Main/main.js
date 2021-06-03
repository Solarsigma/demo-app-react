import React from 'react'
import { Link } from 'react-router-dom';
import mensImage from '../images/Main/mens.jpg'
import womensImage from '../images/Main/womens.jpg'
import childrensImage from '../images/Main/children.jpg'
import booksImage from '../images/Main/books.jpeg'
import './main.css'

function SingleElement(props){
    return (
        <div className="subbox">
            <img src={props.image} alt={props.name} width="300" height="300"/>
            <hr className="hr"/>
            <Link to={props.link}>
                <button className="button" type="button"><span>{props.name}</span></button>
            </Link>
		</div>
    );
}

class Main extends React.Component { 

	render() {
        window.digitalData.page.pageName = "Main page"; 
		return (
			<>
                <div className="mainbox">
                    <SingleElement image = {mensImage} name = "Mens" link="/mens"/>
                    <SingleElement image = {womensImage} name = "Womens" link="/womens"/>
                </div>
                <div className="mainbox">
                    <SingleElement image = {childrensImage} name = "Childrens" link="/children"/>
                    <SingleElement image = {booksImage} name = "Books" link="/book"/>
                </div>
                <hr />
            </>
		);
	}
}

export default Main