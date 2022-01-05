import React from 'react';

const Message = ({messages}) => {
  return (
    <li className={`${messages[0].isOwn ? 'right' : ''}`}>
      <div className="conversation-list">
        <div className="chat-avatar">
          {
            messages[0].avatar
              ?
              <img src={messages[0].avatar} alt=""/>
              :
              <div className="avatar-xs">
        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
          {messages[0].name[0].toUpperCase()}</span>
              </div>
          }

        </div>

        <div className="user-chat-content">
          {
            messages.map(message =>
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">
                    {message.text}
                  </p>
                  <p className="chat-time mb-0"><i className="ri-time-line align-middle"/> <span
                    className="align-middle">{message.time}</span></p>
                </div>
                <div className="dropdown align-self-start">
                  <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <i className="ri-more-2-fill"/>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Copy <i
                      className="ri-file-copy-line float-right text-muted"/></a>
                    <a className="dropdown-item" href="#">Save <i
                      className="ri-save-line float-right text-muted"/></a>
                    <a className="dropdown-item" href="#">Forward <i
                      className="ri-chat-forward-line float-right text-muted"/></a>
                    <a className="dropdown-item" href="#">Delete <i
                      className="ri-delete-bin-line float-right text-muted"/></a>
                  </div>
                </div>
              </div>
            )
          }
          <div className="conversation-name">{messages[0].name}</div>
        </div>
      </div>
    </li>
  );
};

export default Message;
