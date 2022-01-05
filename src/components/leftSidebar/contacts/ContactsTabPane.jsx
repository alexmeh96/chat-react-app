import React from 'react';
import Search from "./Search";
import AddContact from "./AddContact";
import Contacts from "./Contacts";

const ContactsTabPane = () => {
  return (
    <div className="tab-pane" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-right">
            <div data-toggle="tooltip" data-placement="bottom" title="Add Contact">
              <button type="button" className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                      data-toggle="modal" data-target="#addContact-exampleModal">
                <i className="ri-user-add-line"/>
              </button>
            </div>
          </div>
          <h4 className="mb-4">Contacts</h4>

          <AddContact/>

          <Search/>
        </div>

        <Contacts/>

      </div>
    </div>
  );
};

export default ContactsTabPane;
