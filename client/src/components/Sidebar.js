import React from "react";
import "./CSS/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const user = useSelector(state => state.userReducer.user)
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src= {user && user.image}/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
        <IconButton>
        <MoreVertIcon/>
        </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" className="search-input" placeholder="Search or start new chat " />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
