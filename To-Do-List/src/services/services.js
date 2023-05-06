

const baseUrl = 'http://localhost:3030/jsonstore/todos';


export const getAllTodos = () => {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(result => Object.values(result).reverse());
}


export const getOneTodo = (todoId) => {
    return fetch(`${baseUrl}/${todoId}`)
        .then(res => res.json())

}

export const updateTodoStatus = (todoId, body) => {
    return fetch(`${baseUrl}/${todoId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })

}


export const delTodo = (todoId) => {
    return fetch(`${baseUrl}/${todoId}`, {
        method: 'DELETE'
    })
}

export const addTodo = (data) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "text": data,
            "isCompleted": false
        })
    })
        .then(res => res.json())
}