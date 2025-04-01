import React, { Component } from 'react';
import NavBar from './navbar';
import Shoppingcart from './shoppingcart';
class App extends Component { 
    state = { 
        products:[
            {id:1,name:"Burger",count:2},
           { id:2, name:"Pizza",count:0},
           { id:3,name:"cola",count:3}
        ]
     };

     handleDelete = product =>{
        //clone
        //Edit
        const products= this.state.products.filter(p=> p.id!==product.id);
        //Set state
        this.setState({products});

     };

     handleReset = () =>{
        //clone
        let products = [...this.state.products];
        //Edit
        products=products.map(p =>{
            p.count = 0;
            return p;
        });
        //products.forEach(p=>p.count=0);
        //Setstate
        this.setState({products});
     } 

     Incrementhand = product =>{
        //clone
        const products = [...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //Edit
        products[index].count++;
        //setstate
        this.setState({products});
           };
          
    render() { 
        return (
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p=>p.count>0).length}/>
                <main className="container">
                    <Shoppingcart products={this.state.products}
                    onIncrement={this.Incrementhand}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;
 