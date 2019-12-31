import React, { Component } from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'

import "../styles/custom.css"
import {addItem} from '../store/actions'

class Item extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.list = [{}]
        this.state = {
            list: []
        };
    }

    addItem(e) {
        e.preventDefault();
        let id = e.target.elements.prdId.value
        let name = e.target.elements.prdName.value
        let price = parseInt(e.target.elements.prdPrice.value)
        let qty = parseInt(e.target.elements.prdQty.value)
        let item = {
            id: id, qty: qty, price: qty*price
        }
        // console.log(item)
        this.props.dispatch(addItem(item))
    }

    handleClick() {
        alert('Clicked')
    }

    render() {
        return (
            <div className="card item-card">
                <img className="card-img-top mx-auto d-block item-img" src={this.props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.price}</p>
                    <form onSubmit={this.addItem}>
                        <div className="form-row">
                            <input type="hidden" name="prdId" value={this.props.id} />
                            <input type="hidden" name="prdName" value={this.props.name} />
                            <input type="hidden" name="prdPrice" value={this.props.price} />
                            <div className="col">
                                <input type="number" name="prdQty" className="form-control form-control-sm"
                                    placeholder="1" defaultValue="1" />
                            </div>
                            <div className="col">
                                <input type="submit" className="form-control form-control-sm btn-info"
                                    value="Add" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Item);