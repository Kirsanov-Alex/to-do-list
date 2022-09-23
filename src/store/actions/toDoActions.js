export const DELETE_TO_DO = 'DELETE_TO_DO'
export const deleteToDo = (payload) => {
    return {
        type: DELETE_TO_DO,
        payload
    }
}

export const CREATE_TO_DO = 'CREATE_TO_DO'
export const createToDo = (payload)=>{
    return { 
        type: CREATE_TO_DO, 
        payload
    }
}

export const UPDATE_TO_DO = 'UPDATE_TO_DO'
export const updateToDo = (payload) => {
    return {
        type: UPDATE_TO_DO,
        payload
    }
}
export const SELECT_TO_DO = 'SELECT_TO_DO'
export const selectToDo=(payload) =>{
    return {
        type: SELECT_TO_DO,
        payload
    }

}