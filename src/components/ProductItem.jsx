import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props){
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }
    
    onDelete(){
        const {name, onDelete} = this.props;
        onDelete(name)
    }

    render() {

        const {name, price} = this.props;

        return (
            <div>
                <span>{name}</span>
                {' | '}
                <span>{price}</span>
                {' | '}
                <button onClick={this.onDelete}>Eliminar</button>
            </div>
        );
    }
}

export default ProductItem;