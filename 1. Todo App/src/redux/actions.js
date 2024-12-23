import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_UNCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH } from "./actionTypes"


export const addTodo = (taskName) => {
  return {
    type: ADD_TODO,
    payload: {taskName},
  }
}

export const toggleTodo = (id) => {

    return {
        type: TOGGLE_TODO,
        payload: {id},
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: {id},
    }
}

export const markCompleted = (id) => {
    return {
        type: MARK_COMPLETED,
        payload: {id},
    }
}

export const markUncompleted = (id) => {
   return {
       type: MARK_UNCOMPLETED,
       payload: {id},
   }
}

export const filterTodos = (filter) => {
  return {
    type: FILTER_TODOS,
    payload: {filter},
  }
}

export const markAllCompleted = () => {
  return {
    type: MARK_ALL_COMPLETED,
  }
}

export const updateSearch = (searchTerm) => {
  return {
    type: UPDATE_SEARCH,
    payload: {searchTerm},
  }
}