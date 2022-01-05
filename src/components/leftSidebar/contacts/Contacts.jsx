import React from 'react';
import ContactPanel from "./ContactPanel";
import {contacts} from "../../../data";

const Contacts = () => {

  const myContacts = {}

  contacts.sort().forEach(contact => {
    const letter = contact.name[0].toUpperCase();
    if (!(letter in myContacts))
      myContacts[letter] = []
    myContacts[letter].push(contact)
  })
  console.log(myContacts)

  return (
    <div className="p-4 chat-message-list chat-group-list" data-simplebar="">

      {
        Object.entries(myContacts).map(([key, value]) =>
          <div key={key} className="mt-3">
            <div className="p-3 font-weight-bold text-primary">
              {key}
            </div>

            <ul className="list-unstyled contact-list">
              {
                value.map(contact =>

                    <ContactPanel key={contact.id} contact={contact} />
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Contacts;
