import React from 'react';

const Help = () => {
  return (
    <div className="card shadow-none border mb-2">
      <a href="#profile-setting-helpcollapse" className="text-dark collapsed" data-toggle="collapse"
         aria-expanded="false" aria-controls="profile-setting-helpcollapse">
        <div className="card-header" id="profile-setting-helpheading">
          <h5 className="font-size-14 m-0">
            Help
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"/>
          </h5>
        </div>
      </a>
      <div id="profile-setting-helpcollapse" className="collapse"
           aria-labelledby="profile-setting-helpheading" data-parent="#profile-setting-accordion">
        <div className="card-body">

          <div>
            <div className="py-3">
              <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">FAQs</a></h5>
            </div>
            <div className="py-3 border-top">
              <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Contact</a>
              </h5>
            </div>
            <div className="py-3 border-top">
              <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Terms &
                Privacy policy</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
