import './chat.css';
import { messages } from './data'
import { MessageHistory } from './MessageHistory';

export const Chat = () => {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  );
}