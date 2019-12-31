import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import "../styles/custom.css"

import configureStore from '../store/store'
import { addItem } from '../store/actions'
import { log } from "util";

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <img src="/../images/profilebg.png" className="card-img-top profile-bg" alt="..." />
                <img src="/../images/cart.png" className="img-thumbnail profile-img" alt="..." />
                <div className="card-body">
                    <h5 className="profile-name">Shoping Cart</h5>
                    <hr />
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.cartList.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// export default Cart

const mapStateToProps = (state) => {
    return {
        cartList: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
