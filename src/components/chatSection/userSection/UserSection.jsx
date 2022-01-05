import React from 'react';
import About from "./About";
import AttachedFiles from "./AttachedFiles";
import Avatar from "./Avatar";

const UserSection = ({currentDialog}) => {

  return (
    <div className="user-profile-sidebar">
      <div className="px-3 px-lg-4 pt-3 pt-lg-4">
        <div className="user-chat-nav text-right">
          <button type="button" className="btn nav-btn" id="user-profile-hide">
            <i className="ri-close-line"/>
          </button>
        </div>
      </div>

      <Avatar avatar={currentDialog.avatar} name={currentDialog.name} />

      <div className="p-4 user-profile-desc" data-simplebar="">
        <div className="text-muted">
          <p className="mb-4">{currentDialog.info.title}</p>
        </div>

        <div id="profile-user-accordion" className="custom-accordion">
          <About currentDialog={currentDialog}/>

          <AttachedFiles/>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
