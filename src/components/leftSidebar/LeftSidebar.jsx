import React from 'react';
import ProfileTabPane from "./profile/ProfileTabPane";
import ChatsTabPane from "./chats/ChatsTabPane";
import GroupsTabPane from "./groups/GroupsTabPane";
import ContactsTabPane from "./contacts/ContactsTabPane";
import SettingsTabPane from "./settings/SettingsTabPane";

const LeftSidebar = () => {
  return (
    <div className="chat-leftsidebar mr-lg-1">

      <div className="tab-content">

        <ProfileTabPane />

        <ChatsTabPane />

        <GroupsTabPane/>

        <ContactsTabPane />

        <SettingsTabPane />
      </div>

    </div>
  );
};

export default LeftSidebar;
