import React from 'react';

const About = ({currentDialog}) => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#collapseOne" className="text-dark" data-toggle="collapse" aria-expanded="true"
         aria-controls="collapseOne">
        <div className="card-header" id="headingOne">
          <h5 className="font-size-14 m-0">
            <i className="ri-user-2-line mr-2 align-middle d-inline-block"/> About
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"/>
          </h5>
        </div>
      </a>

      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
           data-parent="#profile-user-accordion">
        <div className="card-body">

          <div>
            <p className="text-muted mb-1">Name</p>
            <h5 className="font-size-14">{currentDialog.name}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Email</p>
            <h5 className="font-size-14">{currentDialog.info.email}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Time</p>
            <h5 className="font-size-14">{currentDialog.info.time}</h5>
          </div>

          <div className="mt-4">
            <p className="text-muted mb-1">Location</p>
            <h5 className="font-size-14 mb-0">{currentDialog.info.location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
