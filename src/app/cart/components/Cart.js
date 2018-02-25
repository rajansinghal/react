
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
 
export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, price: 100, qty: 1, name: 'Product 1'}],
            amount: 0, //price * qty of all items
            count: 0, // qty of all items
            flag: false //dummy
        }
    }

    componentWillMount() {
        console.log("cart will mount");
        this.recalculateTotal(this.state.items);
    }
 

    componentDidMount() {
        console.log("cart did mount");
    }

    recalculateTotal(items) {
        let count = 0;
        let amount = 0;

        for (let item of  items) {
            count += item.qty;
            amount += item.qty * item.price
        }

        this.setState({
            // es6 feature
            count,  // count: count
            amount
        })
    }
    
    addItem() {
        let id = Math.ceil(Math.random() * 100000);
        let item = {
            id: id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        const newItems = [...this.state.items, item];
        this.setState({
            items: newItems
        });

        this.recalculateTotal(newItems);
    }

    removeItem(id) {
        //TODO:
         
    }

    empty() {
        this.setState({
            items: []
        })

        this.recalculateTotal([]);
    }

    refresh() {
        //dummy
        this.setState({
            flag: !this.state.flag
        })

    }
    
    render() {
        console.log("Cart Render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={() => this.addItem() }>
             Add
            </button>


            <button onClick={() => this.empty() }>
                Empty
            </button>

         

            <button onClick={() => this.refresh() }>
                Refresh
            </button>

            <CartList items={this.state.items}
                      
            
            />

            <CartSummary amount={this.state.amount} count={this.state.count} />
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}