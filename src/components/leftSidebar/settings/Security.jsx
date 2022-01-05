import React from 'react';

const Security = () => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#profile-setting-securitynoticollapse" className="text-dark collapsed"
         data-toggle="collapse" aria-expanded="false"
         aria-controls="profile-setting-securitynoticollapse">
        <div className="card-header" id="profile-setting-securitynotiheading">
          <h5 className="font-size-14 m-0">
            Security
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
          </h5>
        </div>
      </a>
      <div id="profile-setting-securitynoticollapse" className="collapse"
           aria-labelledby="profile-setting-securitynotiheading"
           data-parent="#profile-setting-accordion">
        <div className="card-body">

          <div>
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Show security notification</h5>

              </div>
              <div className="ml-2">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input"
                         id="security-notificationswitch"/>
                  <label className="custom-control-label"
                         htmlFor="security-notificationswitch"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Security;
