import React from 'react';

const AttachedFiles = () => {
  return (
    <div className="card mb-1 shadow-none border">
      <a href="#profile-user-collapseTwo" className="text-dark collapsed" data-toggle="collapse"
         aria-expanded="false" aria-controls="profile-user-collapseTwo">
        <div className="card-header" id="profile-user-headingTwo">
          <h5 className="font-size-14 m-0">
            <i className="ri-attachment-line mr-2 align-middle d-inline-block"/> Attached Files
            <i className="mdi mdi-chevron-up float-right accor-plus-icon"/>
          </h5>
        </div>
      </a>
      <div id="profile-user-collapseTwo" className="collapse" aria-labelledby="profile-user-headingTwo"
           data-parent="#profile-user-accordion-1">
        <div className="card-body">
          <div className="card p-2 border mb-2">
            <div className="media align-items-center">
              <div className="avatar-sm mr-3">
                <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                  <i className="ri-file-text-fill"/>
                </div>
              </div>
              <div className="media-body">
                <div className="text-left">
                  <h5 className="font-size-14 mb-1">Admin-A.zip</h5>
                  <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                </div>
              </div>

              <div className="ml-4">
                <ul className="list-inline mb-0 font-size-18">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted px-1">
                      <i className="ri-download-2-line"/>
                    </a>
                  </li>
                  <li className="list-inline-item dropdown">
                    <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ri-more-fill"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"/>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-2 border mb-2">
            <div className="media align-items-center">
              <div className="avatar-sm mr-3">
                <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                  <i className="ri-image-fill"/>
                </div>
              </div>
              <div className="media-body">
                <div className="text-left">
                  <h5 className="font-size-14 mb-1">Image-1.jpg</h5>
                  <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                </div>
              </div>

              <div className="ml-4">
                <ul className="list-inline mb-0 font-size-18">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted px-1">
                      <i className="ri-download-2-line"/>
                    </a>
                  </li>
                  <li className="list-inline-item dropdown">
                    <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ri-more-fill"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"/>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-2 border mb-2">
            <div className="media align-items-center">
              <div className="avatar-sm mr-3">
                <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                  <i className="ri-image-fill"/>
                </div>
              </div>
              <div className="media-body">
                <div className="text-left">
                  <h5 className="font-size-14 mb-1">Image-2.jpg</h5>
                  <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                </div>
              </div>

              <div className="ml-4">
                <ul className="list-inline mb-0 font-size-18">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted px-1">
                      <i className="ri-download-2-line"/>
                    </a>
                  </li>
                  <li className="list-inline-item dropdown">
                    <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ri-more-fill"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"/>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-2 border mb-2">
            <div className="media align-items-center">
              <div className="avatar-sm mr-3">
                <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                  <i className="ri-file-text-fill"/>
                </div>
              </div>
              <div className="media-body">
                <div className="text-left">
                  <h5 className="font-size-14 mb-1">Landing-A.zip</h5>
                  <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                </div>
              </div>

              <div className="ml-4">
                <ul className="list-inline mb-0 font-size-18">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted px-1">
                      <i className="ri-download-2-line"/>
                    </a>
                  </li>
                  <li className="list-inline-item dropdown">
                    <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ri-more-fill"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"/>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AttachedFiles;
