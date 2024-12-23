

const initialState = {
  todos: [],
  filter: 'all',
  searchText: '',
}

const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, { text: action.payload.taskName, completed: false }],
                filter: state.filter,
                searchTerm: state.searchTerm
        }
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                }),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case 'MARK_COMPLETED':
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: true }
                    }
                    return todo
                }),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case 'MARK_UNCOMPLETED':
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: false }
                    }
                    return todo
                }),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case 'FILTER_TODOS':
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }

        case 'MARK_ALL_COMPLETED':
            return {
                todos: state.todos.map(todo => {
                    return { ...todo, completed: true }
                }),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case 'UPDATE_SEARCH':
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }        

        default:
            return state    

    }
}

export default todosReducer