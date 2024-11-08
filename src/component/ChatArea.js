


import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import React from "react";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

const ChatArea = () => {
    

    return (
        <div className="chatarea-container">
            <div className="chatArea-header">
                <p className="conversation-icon">P</p>
                <div className="header-text">
                    <p className="conversation-title">Peter</p>
                    <p className="conversation-timeStamp">12.00pm</p>
                </div>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className="chatArea-main">
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
            </div>
            <div className="text-input-area">
                <input placeholder="Type Message" className="search-input"/>
                <IconButton>
                    <SendIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default ChatArea;
