import React, { Component } from 'react';
import Product from './product';
class Shoppingcart extends Component {
  
     render() { 
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <button onClick={this.props.onReset} 
                className="btn btn-secondary btn-small m-2">
                    Reset</button>

                {this.props.products.map(product => (
                    <Product 
                    key={product.id}
                    product={product}
                     onDelete={this.props.onDelete}

                     onIncrement={this.props.onIncrement}
                     {...product} >
                        
                        </Product>
                ))}
            </React.Fragment>
        );
    }
    
}
 
export default Shoppingcart;