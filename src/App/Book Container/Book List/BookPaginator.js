import React from 'react';
import {Pagination} from 'react-bootstrap';

export default class BookPaginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: Math.ceil(props.count / 20)

        };
        console.log(this.props.count)
    }


    selectPage(page) {
        if (page > 0 && page <= this.state.pages) {
            window.location.search = `page=${page}`;
        }
    }


    render() {

        const paginationItems = [];
        for (let i = 1; i <= this.state.pages; i++) {
            paginationItems.push(<Pagination.Item onClick={() => this.selectPage(i)} key={i}
                                                  active={i === parseInt(this.props.page, 10)}>{i}</Pagination.Item>)
        }


        return (
            <div>
                <Pagination bsSize="small">
                    <Pagination.Prev onClick={() => this.selectPage(parseInt(this.props.page, 10) - 1)}/>
                    {[...paginationItems]}
                    <Pagination.Next onClick={() => this.selectPage(parseInt(this.props.page, 10) + 1)}/>
                </Pagination>
            </div>
        )
    }
}
