import React from 'react'
import { useDispatch } from 'react-redux'
import { getProfile } from '../js/action'
import Chat from './Chat'
import Sidebar from './Sidebar'

const Profile = () => {
    const dispatch = useDispatch()
    dispatch(getProfile())
    return (
        <div className="App">
            <div className="App_body">
            <Sidebar/>
            <Chat />
            </div>
        </div>
    )
}

export default Profile
