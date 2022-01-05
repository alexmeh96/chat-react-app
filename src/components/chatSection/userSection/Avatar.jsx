import React from 'react';

const Avatar = ({avatar, name}) => {
  return (
    <div className="text-center p-4 border-bottom">
      <div className="mb-4">
        {
          avatar
            ?
            <img src={avatar} className="rounded-circle avatar-lg img-thumbnail" alt=""/>
            :
            <div className="avatar-lg rounded-circle profile-user img-thumbnail">
          <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-24">
          {name[0].toUpperCase()}
          </span>
            </div>
        }
      </div>

      <h5 className="font-size-16 mb-1 text-truncate">{name}</h5>
      <p className="text-muted text-truncate mb-1"><i
        className="ri-record-circle-fill font-size-10 text-success mr-1"/> Active</p>
    </div>
  );
};

export default Avatar;
