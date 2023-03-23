const registerNewUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_REGISTER_REQUEST' :
            return { 
                ...state,
                loading: true
            }
        case 'USER_REGISTER_SUCCESS' :
            return {
                ...state,
                loading: false,
                success: true,
            }
        case 'USER_REGISTER_FAILED' :
            return {
                ...state,
                loading: false,
                error: 'Email has Already Taken',
            }
        default : 
            return state
    }
}

const loginReducer = (state={}, action) => {
    switch(action.type) {
        case 'USER_LOGIN_REQUEST' :
            return { ...state, loading: true }
        case 'USER_LOGIN_SUCCESS' :
            return { ...state, loading: false, success: true }
        case 'USER_LOGIN_FAILED' :
            return { ...state, loading: false, error: 'Invalid Credentials' }
        case 'USER_LOGOUT' :
            return { ...state }
        default :
            return state;
    }
}

const updateReducer = (state={}, action) => {
    switch(action.type) {
        case 'USER_UPDATE_REQUEST' :
            return { ...state, loading: true }
        case 'USER_UPDATE_SUCCESS' :
            return { ...state, loading: false, success: true }
        case 'USER_UPDATE_FAILED' :
            return { ...state, loading: false, error: 'User already registred' }
        default :
            return state;
    }
}
const getAllUsersReducer = (state={users: []}, action) => {
    switch(action.type) {
        case 'GET_ALL_USERS_REQUEST' :
            return { ...state, loading: true }
        case 'GET_ALL_USERS_SUCCESS' :
            return { ...state, loading: false, users: action.payload }
        case 'GET_ALL_USERS_FAILED' :
            return { ...state, loading: false, error: action.payload }
        default :
            return state;
    }
}

const deleteUserReducer = (state={}, action) => {
    switch(action.type) {
        case 'DELETE_USER_REQUEST':
            return { ...state, loading: false }
        case 'DELETE_USER_SUCCESS' :
            return { ...state, loading: false, success: true }
        case 'DELETE_USER_FAILED' :
            return { ...state, loading: false, error: action.payload }
        default :
            return state;
    }
}

export { registerNewUserReducer, loginReducer, updateReducer, getAllUsersReducer, deleteUserReducer };