export const addItem = (item) => {
    return ({
        type: 'ADD',
        item
    })
}
export const removeItem = (id) => {
    return ({
        type: 'REMOVE',
        id
    })
}
export const editItem = (id, updates) => {
    return ({
        type: 'EDIT',
        id, updates
    })
}
export const resetItems = () => {
    return ({
        type: 'RESET',
    })
}

export const getItems = () => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // console.log(data.todos);
            resolve(data.todos)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', `http://localhost:3000/cart`)
    request.setRequestHeader('xauth', localStorage.getItem('xauth'))
    request.send()
})