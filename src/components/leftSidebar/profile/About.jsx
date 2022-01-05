import React from 'react';
import {currentUser} from "../../../data";

const About = () => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#profile-user-collapseOne" className="text-dark" data-toggle="collapse"
         aria-expanded="true" aria-controls="profile-user-collapseOne">
        <div className="card-header" id="profile-user-headingOne">
          <h5 className="font-size-14 m-0">
            <i className="ri-user-2-line mr-2 align-middle d-inline-block"/> About
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"/>
          </h5>
        </div>
      </a>

      <div id="profile-user-collapseOne" className="collapse show"
           aria-labelledby="profile-user-headingOne" data-parent="#profile-user-accordion-1">
        <div className="card-body">

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

export default About;
