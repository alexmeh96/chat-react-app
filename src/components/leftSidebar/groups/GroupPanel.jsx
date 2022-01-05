import React from 'react';

const GroupPanel = ({name, countMessages}) => {
  return (
    <a href="#">
      <div className="media align-items-center">
        <div className="chat-user-img mr-3">
          <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                          {name[0].toUpperCase()}
                                                        </span>
          </div>
        </div>
        <div className="media-body overflow-hidden">
          <h5 className="text-truncate font-size-14 mb-0">#{name}

              { countMessages > 1 &&
                <span className="badge badge-soft-danger badge-pill float-right">+{countMessages}</span>
              }

            { countMessages === 1 &&
              <span className="badge badge-soft-danger badge-pill float-right">New</span>
            }



          </h5>
        </div>
      </div>
    </a>
  );
};

export default GroupPanel;
