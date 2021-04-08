import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_USER,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
} from "../const/actionTypes";

export const register=(newUser) => async dispatch => {

dispatch({
    type:REGISTER_USER
})
try {
    console.log(newUser)
    const {data}=await axios.post('/api/auth/register',newUser)
    
  localStorage.setItem("token",data.token)
    dispatch({
        type:REGISTER_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:REGISTER_FAIL,
        payload:{err:error.response.data,id:"register"}
    })
    console.log(error.response.data)
}
}
export const login=(user) => async dispatch => {

    dispatch({
        type:LOGIN_USER
    })
    try {
        const {data}=await axios.post('/api/auth/login',user)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:{err:error.response.data,id:"login"}
        })
    }
    }


    export const getProfile=() => async dispatch => {

        dispatch({
            type:GET_PROFILE_USER
        })
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers:{
                    Authorization:token
                }
            }
            const {data}=await axios.get('/api/auth/current_user',config)
            dispatch({
                type:GET_PROFILE_SUCCESS,
                payload:data
            })
        } catch (error) {
            dispatch({
                type:GET_PROFILE_FAIL,
                payload:error.response.data
            })
        }
        }
        export const logout = () =>  dispatch =>{
       
        localStorage.removeItem('token');
        dispatch({
            type:LOGOUT
        })
        }