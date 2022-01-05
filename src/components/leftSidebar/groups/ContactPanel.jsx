import React from 'react';

const ContactPanel = ({contact}) => {
  return (
    <li>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="memberCheck1"/>
        <label className="custom-control-label" htmlFor="memberCheck1">{contact.name}</label>
      </div>
    </li>
  );
};

export default ContactPanel;
