import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import configureStore from '../store/store'
import { addItem } from '../store/actions'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(
    addItem({
        id: 'P003',
        name: 'Nescafe Tasters choice',
        img: '',
        price: '60 Tk'
    })
)

store.dispatch(
    addItem({
        id: 'P007',
        name: 'Nescafe Tasters choice',
        img: '',
        price: '60 Tk'
    })
)



const higherComponent = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>This is wrapped message from {props.name}</p>
                <WrappedComponent {...props} />
            </div>
        )
    }
};



const Info = (props) => {
    return (
        <div>
            <h4>Hello {props.cart.length}</h4>
        </div>
    )
}

const ConnectedComponent = connect((state) => {
    return {
        cart: state.cart
    }
})(Info)

class Test extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedComponent name="Andrew" msg="101"/>
            </Provider>
        );
    }
}

export default Test;

// import { createStore, combineReducers } from 'redux';

// let expensesDefault = []
// let countDefault = {
//     count: 0
// }
// let filtersDefault = {
//     text: '',
//     sortBy: 'data'
// }

// const countReducer = (state = countDefault, action) => {
//     switch (action.type) {
//         case 'INC':
//             return {
//                 count: state.count + action.payload
//             }
//         case 'DEC':
//             return {
//                 count: state.count - 1
//             }
//         case 'SET':
//             return {
//                 count: action.payload
//             }
//         default:
//             return state;
//     }
// }

// const expensesReducer = (state = expensesDefault, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return [...state, action.expense]
//         case 'REM':
//             return state.filter((item) => item.amt != action.amt)
//         case 'EDIT':
//             return state.map((item) => {
//                 if (item.id == action.id) {
//                     return {
//                         ...item, ...action.updates
//                     }
//                 }
//                 else {
//                     return item
//                 }
//             })
//         default:
//             return state;
//     }
// }

// const filtersReducer = (state = filtersDefault, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

// const addExpense = ({ note, amt, id }) => ({
//     type: 'ADD',
//     expense: {
//         note,
//         amt,
//         id
//     }
// })
// const removeExpense = ({ amt }) => ({
//     type: 'REM',
//     amt
// })
// const editExpense = (id, updates) => ({
//     type: 'EDIT',
//     id, updates
// })

// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer,
//         count: countReducer
//     })
// )
// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(
//     addExpense({
//         id: 101,
//         note: 'first expense',
//         amt: 100
//     })
// )
// store.dispatch(
//     addExpense({
//         id: 102,
//         note: 'second expense',
//         amt: 50
//     })
// )
// store.dispatch(
//     editExpense(
//         102,
//         { amt: 10 }
//     )
// )

// let cartReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD':
//             return [...state, action.item]
//         case 'EDIT':
//             return state.map((i) => {
//                 if (i.id == action.id) {
//                     return ({
//                         ...i, ...action.updates
//                     })
//                 }
//                 return i
//             })
//         case 'REMOVE':
//             return state.filter((i) => (i.id != action.id))
//         case 'RESET':
//             return []
//         default:
//             return state
//     }
// }

// let cartStore = createStore(
//     combineReducers({
//         cart: cartReducer
//     })
// )
// cartStore.subscribe(() => {
//     console.log(cartStore.getState())
// })

// let addItem = (item) => {
//     return ({
//         type: 'ADD',
//         item
//     })
// }
// let removeItem = (id) => {
//     return ({
//         type: 'REMOVE',
//         id
//     })
// }
// let editItem = (id, updates) => {
//     return ({
//         type: 'EDIT',
//         id, updates
//     })
// }
// let resetItems = () => {
//     return ({
//         type: 'RESET',
//     })
// }

// cartStore.dispatch(
//     addItem({
//         id: 'P001',
//         name: 'Anchor Milk Powder 2KG',
//         img: '',
//         price: '1800 Tk'
//     })
// )
// cartStore.dispatch(
//     addItem({
//         id: 'P002',
//         name: 'Broke Bond tea 500g',
//         img: '',
//         price: '300 Tk'
//     })
// )
// cartStore.dispatch(
//     addItem({
//         id: 'P003',
//         name: 'Nescafe Tasters choice',
//         img: '',
//         price: '60 Tk'
//     })
// )
// cartStore.dispatch(
//     removeItem('P002')
// )
// cartStore.dispatch(
//     editItem(
//         'P003',
//         { price: '100' }
//     )
// )
// cartStore.dispatch(
//     resetItems()
// )