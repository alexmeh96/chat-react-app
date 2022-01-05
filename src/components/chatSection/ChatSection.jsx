import React, {useContext} from 'react';
import UserSection from "./userSection/UserSection";
import ChatHeader from "./ChatHeader";
import Dialog from "./dialog/Dialog";
import InputSection from "./InputSection";
import {DialogContext} from "../../context";

const ChatSection = () => {

  const {currentDialog, setCurrentDialog} = useContext(DialogContext)


  return (
    <div className="user-chat w-100">
      <div className="d-lg-flex">

        {
          currentDialog.id &&
          <div className="w-100">
            <ChatHeader currentDialog={currentDialog}/>
            <Dialog/>
            <InputSection/>
          </div>
        }

        {
          currentDialog.id && currentDialog.type === 'CHAT' &&
            <UserSection currentDialog={currentDialog}/>
        }
      </div>
    </div>
  );
};

export default ChatSection;
