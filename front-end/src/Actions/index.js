import axios from 'axios';

export const FETCH_CLASSES_START = 'FETCH_CLASSES_START';
export const FETCH_CLASSES_SUCCESS = 'FETCH_CLASSES_SUCCESS';
export const FETCH_CLASSES_FAILURE = 'FETCH_CLASSES_FAILURE';

export const fetchClasses = () =>{
    return (dispatch) =>{
        dispatch({type: FETCH_CLASSES_START});
        axios
        .get(null,{
            headers:{
                Authorization: JSON.parse(window.localStorage.getItem('token'))
            }
        })//end of get
        .then(res =>{
            console.log(res.data);
            dispatch({type: FETCH_CLASSES_SUCCESS, payload: res.data});
        })//end of then
        .catch(err =>{
            console.log(err);
            dispatch({type: FETCH_CLASSES_FAILURE, payload:err.message});
        })//end of catch
    }
}//end of fecthClasses

export const FETCH_USER_ROLE_START = 'FETCH_USER_ROLE_START';
export const FETCH_USER_ROLE_SUCCESS = 'FETCH_USER_ROLE_SUCCESS';
export const FETCH_USER_ROLE_FAILURE = 'FETCH_USER_ROLE_FAILURE';
export const fecthUserRole = (userId)=>{
    return(dispatch) => {
        
        dispatch({type:FETCH_USER_ROLE_START});
        axios
            .get(`${userId}`,{
                headers:{
                    Authorization: JSON.parse(window.localStorage.getItem('token'))
                }
            })//end of get
            .then(res =>{
                dispatch({type: FETCH_CLASSES_SUCCESS, payload: res.data});
            })//end of then
            .catch(err=>{
                dispatch({type: FETCH_CLASSES_FAILURE,payload: err.message});
            })//end of catch
    }//end of dispatch
}//end of fetchUserRole

export const FETCH_ALL_USERS_START = 'FETCH_ALL_USERS_START';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_SUCCESS';

export const fetchAllUsers = () => {
    return(dispatch) =>{
        dispatch({type:FETCH_ALL_USERS_START});
        axios
            .get(null,{ 
                headers:{
                    Authorization:JSON.parse(window.localStorage.getItem('token'))}
            })//end of get
            .then(res => {
                dispatch({type: FETCH_ALL_USERS_SUCCESS, payload: res.data});
            })//end of then
            .catch(err => {
                dispatch({type: FETCH_ALL_USERS_FAILURE, payload:err.message});
            })//end of catch

    }//end of dispatch
}//end of fetchAllUsers

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const setActiveUser = (user) => {
    return({ type: SET_ACTIVE_USER, payload: user });
}//end of SetActiveUser

export const SET_MY_CLASS = 'SET_MY_CLASS';
export const setMyClass = (myClass) => {
    return({ type: SET_MY_CLASS, payload: myClass });
}//End of setMyClass

export const FETCH_MY_CLASSES = 'FETCH_MY_CLASSES';
export const fetchMyClasses = (myClasses) => {
    return({ type: FETCH_MY_CLASSES, payload: myClasses });
}//End of FecthMyClass

export const SET_CLASSES = 'SET_CLASSES';
export const setClasses = (classes) => {
    return({ type: SET_CLASSES, payload: classes });
}//End of setClass