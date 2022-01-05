import React from 'react';
import Avatar from "./Avatar";
import About from "./About";
import AttachedFiles from "./AttachedFiles";
import {currentUser} from "../../../data";

const ProfileTabPane = () => {
  return (
    <div className="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
      <div>
        <div className="px-4 pt-4">
          <div className="user-chat-nav float-right">
            <div className="dropdown">
              <a href="" className="font-size-18 text-muted dropdown-toggle"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ri-more-2-fill"/>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Edit</a>
                <a className="dropdown-item" href="#">Action</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item" href="#">Another action</a>
              </div>
            </div>
          </div>
          <h4 className="mb-0">My Profile</h4>
        </div>

        <Avatar/>

        <div className="p-4 user-profile-desc" data-simplebar="">
          <div className="text-muted">
            <p className="mb-4">{currentUser.title}</p>
          </div>


          <div id="profile-user-accordion-1" className="custom-accordion">

            <About />

            <AttachedFiles/>
          </div>

        </div>
      </div>
    </div>

  );
};

export default ProfileTabPane;
