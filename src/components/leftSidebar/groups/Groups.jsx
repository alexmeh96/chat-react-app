import React from 'react';
import GroupPanel from "./GroupPanel";
import {groups} from "../../../data";



const Groups = () => {


  return (
    <div className="p-4 chat-message-list chat-group-list" data-simplebar="">


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
            <li>
              <GroupPanel name={group.name} countMessages={group.countMessages}/>
            </li>
          )
        }

      </ul>
    </div>
  );
};

export default Groups;
