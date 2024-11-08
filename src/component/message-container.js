
import Welcome from "./Welcome";
import Sidebar from "./Sidebar";

import ChatArea from "./ChatArea";


const Message = () => {
    
    return (
        <div className="main-container mt-2">
             {/*<ChatArea />*/}
              <Sidebar/> 
              
              <Welcome/>
              
        </div>
    );
};

export default Message;

