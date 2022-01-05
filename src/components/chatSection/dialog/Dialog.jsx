import React from 'react';
import Message from "./Message";
import {messages} from "../../../data";

const Dialog = () => {

  const messagesList = [[messages[0]]]


  for (let i = 1; i < messages.length; i++) {
    if (messages[i].isOwn !== messages[i - 1].isOwn) {
      messagesList.push([])
    }
    messagesList[messagesList.length - 1].push(messages[i])
  }

  console.log(messagesList)


  return (
    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
      <ul className="list-unstyled mb-0">

        {
          messagesList.map((m, index) =>
            <Message key={index} messages={m}/>
          )
        }
      </ul>
    </div>
  );
};

export default Dialog;
