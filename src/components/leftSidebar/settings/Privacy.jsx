import React from 'react';

const Privacy = () => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#profile-setting-privacycollapse" className="text-dark collapsed" data-toggle="collapse"
         aria-expanded="false" aria-controls="profile-setting-privacycollapse">
        <div className="card-header" id="profile-setting-privacyheading">
          <h5 className="font-size-14 m-0">
            Privacy
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
          </h5>
        </div>
      </a>
      <div id="profile-setting-privacycollapse" className="collapse"
           aria-labelledby="profile-setting-privacyheading" data-parent="#profile-setting-accordion">
        <div className="card-body">
          <div className="py-3">
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>

              </div>
              <div className="dropdown ml-2">
                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Everyone <i className="mdi mdi-chevron-down"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">Everyone</a>
                  <a className="dropdown-item" href="#">selected</a>
                  <a className="dropdown-item" href="#">Nobody</a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 border-top">
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>

              </div>
              <div className="ml-2">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="privacy-lastseenSwitch"
                         checked=""/>
                  <label className="custom-control-label" htmlFor="privacy-lastseenSwitch"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 border-top">
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Status</h5>

              </div>
              <div className="dropdown ml-2">
                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Everyone <i className="mdi mdi-chevron-down"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">Everyone</a>
                  <a className="dropdown-item" href="#">selected</a>
                  <a className="dropdown-item" href="#">Nobody</a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 border-top">
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>

              </div>
              <div className="ml-2">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="privacy-readreceiptSwitch"
                         checked=""/>
                  <label className="custom-control-label" htmlFor="privacy-readreceiptSwitch"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 border-top">
            <div className="media align-items-center">
              <div className="media-body overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>

              </div>
              <div className="dropdown ml-2">
                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Everyone <i className="mdi mdi-chevron-down"/>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">Everyone</a>
                  <a className="dropdown-item" href="#">selected</a>
                  <a className="dropdown-item" href="#">Nobody</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Privacy;
