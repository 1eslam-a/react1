import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  // بدون مسار نسبي (../)
class Product extends Component {
    // state = {
    //     name: this.props.name,
    //     count: this.props.count
        
     
    // };
    getclasses(){
        return this.props.count===0
        ? "badge badge-warning m-2"
        :"badge badge-primary m-2";
    }
   /*
1- rendername(){
        if(this.state.names.length===0){
            return <h2>No Named</h2>
        }
        else{
            <ul>
            {this.state.names.map(name=>
            <li key={name}>{name}</li>)}
            
         </ul>
        };
    }*/

       
    //   increment=()=>{
    //     this.Incrementkhand(2);
    //   };
render() {
return (
            
            <div className="row">
                <div className="col-1">
                    <span>
                        {this.props.name}
                    </span>
                </div>
                <div className="col">
                <span className={`bg-primary text-white p-2 rounded ${this.getclasses()}`}>
  {this.props.count}
</span>                
<button 
  onClick={() => this.props.onIncrement(this.props.product)}
  className="btn btn-primary btn-sm"
>
  +
</button>

             
             <button onClick={() => this.props.onDelete(this.props)} className="btn btn-danger btn-sm m-2">
  <i className="fa-solid fa-trash-can"></i>
</button>

        </div>
        </div>
        );
    }
}

export default Product;
