import React from 'react';
import ReactDOM from 'react-dom';
import Mysalesapp from './components/mysalesapp';
// import Test from './components/test'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import history from "./history/history";
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './store/store'
import { addItem, getItems } from './store/actions'
import AppRouter from './routers/AppRouter'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

getItems().then((items) => {
    items.forEach((item) => {
        let temp = {
            objId: item._id,
            prdId: item.pId,
            prdName: item.pName,
            prdQty: item.pQty,
            prdPrice: item.pPrice,
        }
        store.dispatch(
            addItem({
                id: item.pId,
                name: item.pName,
                qty: item.pQty,
                price: item.pPrice
            })
        )
    })
})



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


// ReactDOM.render(<Mysalesapp></Mysalesapp>, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
