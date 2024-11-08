import React from 'react';

const MessageSelf = () => {
    var props2 = {name: "You", message: "This is a message of the day march This is a message of the day march This is a message of the day march This is a message of the day march"}
    return (
        <div className="self-message-container">
            <div className="self-messagebox">
                <p className="conversation-message-title">{props2.name}</p>
                <p className="conversation-lastMessage">{props2.message}</p>
                <p className="self-timeStamp">12.01am</p>
            </div>
            
        </div>
    );
};

export default MessageSelf;
