import React, {useContext} from 'react';
import {DialogContext} from "../../../context";

const GroupPanel = ({group}) => {

  const {currentDialog, setCurrentDialog} = useContext(DialogContext)

  const chooseGroup = () => {
    setCurrentDialog(group)
  }

  return (
    <li className={`${currentDialog.id === group.id  && currentDialog.type === 'GROUP' ? "active" : ""}`}>
      <a href="#" onClick={chooseGroup}>
        <div className="media align-items-center">
          <div className="chat-user-img mr-3">
            <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                          {group.name[0].toUpperCase()}
                                                        </span>
            </div>
          </div>
          <div className="media-body overflow-hidden">
            <h5 className="text-truncate font-size-14 mb-0">#{group.name}

              {group.countMessages > 1 &&
              <span className="badge badge-soft-danger badge-pill float-right">+{group.countMessages}</span>
              }

              {group.countMessages === 1 &&
              <span className="badge badge-soft-danger badge-pill float-right">New</span>
              }


            </h5>
          </div>
        </div>
      </a>
    </li>
  );
};

export default GroupPanel;
