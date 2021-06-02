


const Download = function({ match }) {
	const book = match.params.book;
	return require(`../books/pdfs/${book}.pdf`);
}

export default Download