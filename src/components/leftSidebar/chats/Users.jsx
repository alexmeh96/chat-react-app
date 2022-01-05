import React from 'react';
// import OwlCarousel from "react-owl-carousel";
import UserItem from "./UserItem";
import {users} from "../../../data";

const Users = () => {
  return (
    <div className="px-4 pb-4" dir="ltr">

      <div className="owl-carousel owl-theme" id="user-status-carousel">
      {/*<OwlCarousel items={4} margin={16} dots={false} className="owl-theme" id="user-status-carousel">*/}
        {
          users.map(user =>
            <UserItem key={user.id} user={user} />
          )
        }
      </div>
    </div>
  );
};

export default Users;
