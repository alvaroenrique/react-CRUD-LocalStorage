import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        return (
            <form>
                <p>Agragar producto: </p>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Price"/>
                <button>Agregar</button>
                <hr/>
            </form>
        );
    }
}

export default AddItem;