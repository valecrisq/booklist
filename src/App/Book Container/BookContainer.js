import React from 'react';
import BookList from "./Book List/BookList";
import BookPaginator from "./Book List/BookPaginator";


const apibooks = '/api/books';

function getUrlParams(search) {
    let hashes = search.slice(search.indexOf('?') + 1).split('&');
    let params = {};
    hashes.map(hash => {
        let [key, val] = hash.split('=');
        params[key] = decodeURIComponent(val);
        return hash
    });
    return params
}

export default class BookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookslist: [],
            page: 1,
            count: 0
        }
    }

    componentDidMount() {
        const params = getUrlParams(window.location.search);
        fetch(`http://nyx.vima.ekt.gr:3000${apibooks}`, {method: 'POST', body: JSON.stringify({page: params.page || 1})})
            .then(result => result.json())
            .then(resultjson => {
                this.setState({
                    bookslist: resultjson.books,
                    page: params.page || 1,
                    count: resultjson.count
                })
            })
    }

    render() {
        if (this.state.bookslist.length === 0) return false;
        return (
            <div>
                <BookList bookslist={this.state.bookslist}/>
                <BookPaginator page={this.state.page} count={this.state.count}/>
            </div>
        )
    }
}
