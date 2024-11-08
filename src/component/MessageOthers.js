import React from 'react';

const MessageOthers = () => {
    var props1 = {name: "RandomUser", message: "This is a sample message written during developmemt"}
    return (
        <div className="other-message-container">
            <div className="other-messagebox">
                <p className="conversation-icon">{props1.name[0]}</p>
                <div className="other-text-content">
                    <p className="conversation-message-title">{props1.name}</p>
                    <p className="conversation-lastMessage">{props1.message}</p>
                    <p className="self-timeStamp">12.00am</p>
                </div>
            </div> 
        </div>
    );
};

export default MessageOthers;
