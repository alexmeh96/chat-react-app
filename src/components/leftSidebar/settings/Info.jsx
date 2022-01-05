import React from 'react';
import {currentUser} from "../../../data";

const Info = () => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#profile-setting-personalinfocollapse" className="text-dark" data-toggle="collapse"
         aria-expanded="true" aria-controls="profile-setting-personalinfocollapse">
        <div className="card-header" id="profile-setting-personalinfoheading">
          <h5 className="font-size-14 m-0">
            Personal Info
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"/>
          </h5>
        </div>
      </a>

      <div id="profile-setting-personalinfocollapse" className="collapse show"
           aria-labelledby="profile-setting-personalinfoheading"
           data-parent="#profile-setting-accordion">
        <div className="card-body">

          <div className="float-right">
            <button type="button" className="btn btn-light btn-sm"><i
  className="ri-edit-fill mr-1 align-middle"/> Edit
            </button>
          </div>

          <div>
            <p className="text-muted mb-1">Name</p>
            <h5 className="font-size-14">{currentUser.name}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Email</p>
            <h5 className="font-size-14">{currentUser.email}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Time</p>
            <h5 className="font-size-14">{currentUser.time}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Location</p>
            <h5 className="font-size-14 mb-0">{currentUser.location}</h5>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Info;
