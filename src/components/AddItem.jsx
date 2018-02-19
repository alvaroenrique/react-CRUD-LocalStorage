import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>Agragar producto: </p>
                <input type="text" placeholder="Nombre" ref={nameInput => this.nameInput = nameInput} />
                <input type="text" placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
                <button>Agregar</button>
                <hr/>
            </form>
        );
    }
}

export default AddItem;