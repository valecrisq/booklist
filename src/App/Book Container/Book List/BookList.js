import React from 'react';

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const bookList = this.props.bookslist.map((book) => {
            return <li key={book.id}>{book.book_title} - {book.book_author} - {book.book_publication_year}</li>
        });

        return (
            <div>
                <ul>
                    {bookList}
                </ul>
            </div>
        )
    }
}
