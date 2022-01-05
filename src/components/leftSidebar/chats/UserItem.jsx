import React from 'react';
import avatar from "../../../static/picture/avatar-1.jpg";

const UserItem = ({user}) => {
  return (
    <div className="item">
      <a href="#" className="user-status-box">
        <div className="avatar-xs mx-auto d-block chat-user-img online">
          {
            user.avatar
              ? <img src={avatar} alt="user-img" className="img-fluid rounded-circle"/>
              : <span
                className="avatar-title rounded-circle bg-soft-primary text-primary">
                {user.name[0].toUpperCase()}
              </span>}
          <span className="user-status"/>
        </div>

        <h5 className="font-size-13 text-truncate mt-3 mb-1">{user.name}</h5>
      </a>
    </div>
  );
};

export default UserItem;
