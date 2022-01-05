import React from 'react';
import UserSection from "./userSection/UserSection";
import ChatHeader from "./ChatHeader";
import Dialog from "./dialog/Dialog";
import InputSection from "./InputSection";

const ChatSection = () => {
  return (
    <div className="user-chat w-100">
      <div className="d-lg-flex">

        <div className="w-100">

          <ChatHeader/>

          <Dialog/>

          <InputSection/>
        </div>

        <UserSection/>
      </div>
    </div>
  );
};

export default ChatSection;
