import React from 'react';

const ContactPanel = ({contact}) => {
  return (
    <li>
      <div className="media align-items-center">
        <div className="media-body">
          <h5 className="font-size-14 m-0">{contact.name}</h5>
        </div>

        <div className="dropdown">
          <a href="#" className="text-muted dropdown-toggle" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <i className="ri-more-2-fill"/>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">Share <i
              className="ri-share-line float-right text-muted"/></a>
            <a className="dropdown-item" href="#">Block <i
              className="ri-forbid-line float-right text-muted"/></a>
            <a className="dropdown-item" href="#">Remove <i
              className="ri-delete-bin-line float-right text-muted"/></a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactPanel;
