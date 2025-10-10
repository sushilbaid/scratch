import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."></input>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <p>
                Product table
                </p>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable
