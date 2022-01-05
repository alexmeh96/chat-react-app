import React from 'react';
import ContactPanel from "./ContactPanel";
import {contacts} from "../../../data";

const CreateGroup = () => {

  const myContacts = {}

  contacts.sort().forEach(contact => {
    const letter = contact.name[0].toUpperCase();
    if (!(letter in myContacts))
      myContacts[letter] = []
    myContacts[letter].push(contact)
  })
  console.log(myContacts)

  return (
    <div className="modal fade" id="addgroup-exampleModal" tabIndex="-1" role="dialog"
         aria-labelledby="addgroup-exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-size-16" id="addgroup-exampleModalLabel">Create New Group</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4">
            <form>
              <div className="form-group mb-4">
                <label htmlFor="addgroupname-input">Group Name</label>
                <input type="text" className="form-control" id="addgroupname-input"
                       placeholder="Enter Group Name"/>
              </div>
              <div className="form-group mb-4">
                <label>Group Members</label>
                <div className="mb-3">
                  <button className="btn btn-light btn-sm" type="button" data-toggle="collapse"
                          data-target="#groupmembercollapse" aria-expanded="false"
                          aria-controls="groupmembercollapse">
                    Select Members
                  </button>
                </div>

                <div className="collapse" id="groupmembercollapse">
                  <div className="card border">
                    <div className="card-header">
                      <h5 className="font-size-15 mb-0">Contacts</h5>
                    </div>
                    <div className="card-body p-2">
                      <div data-simplebar="" style={{maxHeight: '150px'}}>


                        {
                          Object.entries(myContacts).map(([key, value]) =>
                            <div>
                              <div className="p-3 font-weight-bold text-primary">
                                {key}
                              </div>

                              <ul className="list-unstyled contact-list">
                                {
                                  value.map(contact => <ContactPanel contact={contact}/>)
                                }
                              </ul>
                            </div>
                          )
                        }
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="addgroupdescription-input">Description</label>
                <textarea className="form-control" id="addgroupdescription-input" rows="3"
                          placeholder="Enter Description"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Create Groups</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
