import axios from "axios"
import { useHistory } from "react-router-dom";

const url = import.meta.env.VITE_BASE_URL;

const registerNewUser = (user) => dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });

    axios
    .post(`${url}/users/register`, user)
    .then(res => {
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
    })
    .catch(err => 
        dispatch({ type: 'USER_REGISTER_FAILED', payload: err })    
    );
}

const loginUser = (user) => dispatch => {
    // const history = useHistory();

    dispatch({ type: 'USER_LOGIN_REQUEST' });

    axios
    .post(`${url}/users/login`, user)
    .then(res => {
        dispatch({ type: 'USER_LOGIN_SUCCESS' });

        localStorage.setItem('currentUser', JSON.stringify(res.data));

        window.location.href = "/";
    })
    .catch(err => {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: err })

        console.error(err);
    })
}

const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');

    dispatch({ type: 'USER_LOGOUT' });

    window.location.href = "/login";
}

const updateUser = (userid, updateUser) => dispatch => {
    dispatch({ type: 'USER_UPDATE_REQUEST' })

    axios
        .post(`${url}/users/update`, { userid: userid, updateduser: updateUser } )
        .then((res) => {
            dispatch({ type: 'USER_UPDATE_SUCCESS' })
        })
        .catch((err) => {
            dispatch({ type: 'USER_UPDATE_FAILED', payload: err })
            console.error(err);
        })
}

const getAllUsers = () => dispatch => {
    dispatch({ type: 'GET_ALL_USERS_REQUEST' })

    axios
        .get(`${url}/users/getallusers`)
        .then(res => {
            dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'GET_ALL_USERS_FAILED', payload: err })
        })
}

const deleteUser = (userid) => dispatch => {
    dispatch({ type: 'DELETE_USER_REQUEST' })

    axios
        .post(`${url}/users/deleteuser`, { userid })
        .then(res => {
            dispatch({ type: 'DELETE_USER_SUCCESS', payload: userid })
            // alert('user deleted successfully')
            
            // this dispatch has great effect for deleting item without refresh page 
            // dispatch({ type: 'DELETE_USER', payload: userid })
        })
        .catch(err => {
            dispatch({ type: 'DELETE_USER_FAILED' , payload: err })
        })
}


export { registerNewUser, loginUser, logoutUser, updateUser, getAllUsers, deleteUser };