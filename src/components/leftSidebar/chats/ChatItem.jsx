import React from 'react';

const ChatItem = ({chat, active}) => {
  return (
    // className="unread"
    // className="active"
    // className="typing"

    <li className={`${active ? "active" : ""} ${chat.typing ? "typing" : ""}`}>
      <a href="#">
        <div className="media">

          <div className="chat-user-img online align-self-center mr-3">

            {
              chat.avatar
                ?
                <img src={chat.avatar} className="rounded-circle avatar-xs" alt=""/>
                :
                <div className="avatar-xs">
                                                            <span
                                                              className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                {chat.name[0].toUpperCase()}
                                                            </span>
                </div>
            }

            {chat.online && <span className="user-status"/>}
          </div>

          <div className="media-body overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">{chat.name}</h5>
            {
              chat.typing
                ?
                <p className="chat-user-message text-truncate mb-0">typing<span
                className="animate-typing">
              <span className="dot"/>
              <span className="dot"/>
              <span className="dot"/>
              </span></p>
                :
                chat.lastMessage
                  ?
                  <p className="chat-user-message text-truncate mb-0">{chat.lastMessage}</p>
                  :
                  <p className="chat-user-message text-truncate mb-0">Hey! there I'm available</p>
            }

          </div>
          <div className="font-size-11">{chat.dateTime}</div>
          {
            chat.countMessages !== 0 && <div className="unread-message">
              <span className="badge badge-soft-danger badge-pill">{chat.countMessages}</span>
            </div>
          }
        </div>
      </a>
    </li>
  );
};

export default ChatItem;
