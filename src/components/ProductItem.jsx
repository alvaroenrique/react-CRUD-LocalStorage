import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props){
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    
    onDelete(){
        const {name, onDelete} = this.props;
        onDelete(name)
    }

    onEdit(){
        
    }

    render() {

        const {name, price} = this.props;

        return (
            <div>
                <span>{name}</span>
                {' | '}
                <span>{price}</span>
                {' | '}     
                <button onClick={this.onEdit}>Editar</button>
                {' | '}
                <button onClick={this.onDelete}>Eliminar</button>
            </div>
        );
    }
}

export default ProductItem;