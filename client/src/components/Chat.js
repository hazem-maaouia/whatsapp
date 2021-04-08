import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import './CSS/Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
const Chat = () => {
    return ( 
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerinfo">
                   <h3>Room name</h3>
                   <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                  <IconButton>
                      <SearchOutlined />
                      </IconButton>  
                      <IconButton>
                          <AttachFile/>
                      </IconButton>
                      <IconButton>
                          <MoreVert />
                      </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Sonny
                    </span>
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    This is a message</p>

                    <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Sonny
                    </span>
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    This is a message</p>
                    
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit"> send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
