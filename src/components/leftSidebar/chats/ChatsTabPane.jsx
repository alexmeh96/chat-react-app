import React from 'react';
import Search from "./Search";
import Users from "./Users";
import Chats from "./Chats";

const ChatsTabPane = () => {
  return (
    <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
      <div>

        <Search/>
        <Users/>

        <div className="px-2">
          <h5 className="mb-3 px-3 font-size-16">Recent</h5>

          <Chats/>

        </div>
      </div>
    </div>
  );
};

export default ChatsTabPane;
