/*
import React, { useState } from 'react';
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';





const Sidebar = () => {
    const [conversations, setConversations] = useState([
        {
            name: "User1",
            lastMessage: "Last massage#1",
            timeStamp: "today",
        },

        {
            name: "User2",
            lastMessage: "Last massage#2",
            timeStamp: "today",
        },

        {
            name: "User3",
            lastMessage: "Last massage#3",
            timeStamp: "today",
        },


    ]);



    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <div>
                    <IconButton>
                      <AccountCircleIcon/>
                    </IconButton>
                </div>

                <div>
                    <IconButton>
                      <MoreVertIcon/>
                    </IconButton>
                </div>
                
            </div>
            <div className="sidebar-search">
                <IconButton>
                  <SearchIcon/>
                </IconButton>
                
                <input placeholder="search" className="search-input"/>
            </div>
            <div className="conversations">
                {conversations.map((conversation) =>{
                    
                    <ConversationItem props={conversation} key={conversation.name} />
   
                })}
                
            </div>
        </div>
    );
}

export default Sidebar;
*/



import React, { useState } from 'react';
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    const [conversations, setConversations] = useState([
        {
            name: "User1",
            lastMessage: "Last massage#1",
            timeStamp: "today",
        },

        {
            name: "User2",
            lastMessage: "Last massage#2",
            timeStamp: "today",
        },

        {
            name: "User3",
            lastMessage: "Last massage#3",
            timeStamp: "today",
        },

        {
            name: "User4",
            lastMessage: "Last massage#4",
            timeStamp: "today",
        },

        {
            name: "User5",
            lastMessage: "Last massage#5",
            timeStamp: "today",
        },

        {
            name: "User6",
            lastMessage: "Last massage#6",
            timeStamp: "today",
        },

        {
            name: "User7",
            lastMessage: "Last massage#7",
            timeStamp: "today",
        },

        {
            name: "User8",
            lastMessage: "Last massage#8",
            timeStamp: "today",
        },

        {
            name: "User9",
            lastMessage: "Last massage#9",
            timeStamp: "today",
        },

        {
            name: "User10",
            lastMessage: "Last massage#10",
            timeStamp: "today",
        },

        {
            name: "User11",
            lastMessage: "Last massage#11",
            timeStamp: "today",
        },

        {
            name: "User12",
            lastMessage: "Last massage#12",
            timeStamp: "today",
        },
    ]);

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <div>
                    <IconButton>
                      <AccountCircleIcon/>
                    </IconButton>
                </div>

                <div>
                    <IconButton>
                      <MoreVertIcon/>
                    </IconButton>
                </div>
                
            </div>
            <div className="sidebar-search">
                <IconButton>
                  <SearchIcon/>
                </IconButton>
                
                <input placeholder="search" className="search-input"/>
            </div>
            <div className="conversations">
                {conversations.map((conversation) => (
                    <ConversationItem props={conversation} key={conversation.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

