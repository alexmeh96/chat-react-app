import React from 'react';
import {currentUser} from "../../../data";

const Avatar = () => {
  return (
    <div className="text-center border-bottom p-4">
      <div className="mb-4 profile-user">
        {
          currentUser.avatar
            ?
            <img src={currentUser.avatar} className="rounded-circle avatar-lg img-thumbnail" alt=""/>
            :
            <div className="avatar-lg rounded-circle profile-user img-thumbnail">
          <span
            className="avatar-title rounded-circle bg-soft-primary text-primary font-size-24">
          {currentUser.name[0].toUpperCase()}
          </span>
            </div>
        }

        <button type="button" className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit">
          <i className="ri-pencil-fill"/>
        </button>
      </div>

      <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
      <div className="dropdown d-inline-block mb-1">
        <a className="text-muted dropdown-toggle pb-1 d-block" href="#" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          Available <i className="mdi mdi-chevron-down"/>
        </a>

        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Available</a>
          <a className="dropdown-item" href="#">Busy</a>
        </div>
      </div>
    </div>

  );
};

export default Avatar;
