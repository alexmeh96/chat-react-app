import React from 'react';
import Search from "./Search";
import Groups from "./Groups";
import CreateGroup from "./CreateGroup";

const GroupsTabPane = () => {
  return (
    <div className="tab-pane" id="pills-groups" role="tabpanel" aria-labelledby="pills-groups-tab">
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-right">
            <div data-toggle="tooltip" data-placement="bottom" title="Create group">
              <button type="button" className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                      data-toggle="modal" data-target="#addgroup-exampleModal">
                <i className="ri-group-line mr-1"/>
              </button>
            </div>

          </div>
          <h4 className="mb-4">Groups</h4>

          <CreateGroup/>

          <Search/>
        </div>

        <Groups/>
      </div>
    </div>
  );
};

export default GroupsTabPane;
