import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    
    onDelete(){
        const {name, onDelete} = this.props;
        onDelete(name)
    }

    onEdit(){
        this.setState({isEdit: true})
    }
    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

        this.setState({isEdit: false});
    }

    render() {

        const {name, price} = this.props;

        return (
            <div>
                {
                    this.state.isEdit
                    ? (
                        <form onSubmit={this.onEditSubmit}>
                            <input type="text" placeholder="Nombre" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <input type="text" placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue = {price}/>
                            <button>Guardar</button>
                        </form>
                    )
                    : (
                        <div>
                            <span>{name}</span>
                            {' | '}
                            <span>{price}</span>
                            {' | '}     
                            <button onClick={this.onEdit}>Editar</button>
                            {' | '}
                            <button onClick={this.onDelete}>Eliminar</button>
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default ProductItem;