import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../styles/custom.css"

// import { BrowserRouter, Route } from "react-router-dom"

import { products1, products2 } from "../db/products.js"
import Cart from "./cart"
import ShopNav from "./shopNav"
import Item from "./item"

class Mysalesapp extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };

    }

    render() {
        return (
            <div>
                <ShopNav />
                <div className="base">
                    <div className="row">
                        <div className="col-md-8" key="col-1">
                            <div className="row" key="row-1">
                                {
                                    products1.map((it) => {
                                        return (
                                            <div className="col-md-3" key={it.id}>
                                                <Item name={it.name} price={it.price} img={it.img} id={it.id} key={it.id} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <br />
                            <div className="row" key="row-2">
                                {
                                    products2.map((it) => {
                                        return (
                                            <div className="col-md-3" key={it.id}>
                                                <Item name={it.name} price={it.price} img={it.img} id={it.id} key={it.id}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="col-md-4" key="col-2">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mysalesapp;