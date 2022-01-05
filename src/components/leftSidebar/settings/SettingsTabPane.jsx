import React from 'react';
import Avatar from "./Avatar";
import Info from "./Info";
import Privacy from "./Privacy";
import Security from "./Security";
import Help from "./Help";

const SettingsTabPane = () => {
  return (
    <div className="tab-pane" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
      <div>
        <div className="px-4 pt-4">
          <h4 className="mb-0">Settings</h4>
        </div>

        <Avatar/>

        <div className="p-4 user-profile-desc" data-simplebar="">

          <div id="profile-setting-accordion" className="custom-accordion">
            <Info/>
            <Privacy/>
            <Security/>
            <Help/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabPane;
