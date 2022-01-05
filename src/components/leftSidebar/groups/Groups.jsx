import React from 'react';
import {groups} from "../../../data";
import GroupPanel from "./GroupPanel";


const Groups = () => {


  return (
    // <div className="p-4 chat-message-list chat-group-list" data-simplebar="">
    <div className="p-4 chat-message-list chat-user-list" data-simplebar="">


      <ul className="list-unstyled chat-list">

        {/*{*/}
        {/*  Array.from({ length: 5 }, (_, i) => (*/}
        {/*    <li>*/}
        {/*      <GroupPanel/>*/}
        {/*    </li>*/}
        {/*  ))*/}
        {/*}*/}

        {
          groups.map(group =>
            <GroupPanel key={group.id} group={group} />
          )
        }

      </ul>
    </div>
  );
};

export default Groups;
