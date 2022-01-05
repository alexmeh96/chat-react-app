import React, {useState} from "react";

import Menu from "./components/menu/Menu";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import ChatSection from "./components/chatSection/ChatSection";
import {DialogContext} from "./context";
import jQuery from "jquery";

const $ = jQuery;
window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

function App() {

  const [currentDialog, setCurrentDialog] = useState({})

  $(document).ready(function () {
    // $(".popup-img").magnificPopup({
    //   type: "image",
    //   closeOnContentClick: !0,
    //   mainClass: "mfp-img-mobile",
    //   image: {verticalFit: !0}
    // });

    $("#user-status-carousel").owlCarousel({
      items: 4,
      loop: !1,
      margin: 16,
      nav: !1,
      dots: !1
    });

    $("#user-profile-hide").click(function () {
      $(".user-profile-sidebar").hide()
    });

    $(".user-profile-show").click(function () {
      $(".user-profile-sidebar").show()
    });

    $(".chat-user-list li a").click(function () {
      $(".user-chat").addClass("user-chat-show")
    });

    $(".user-chat-remove").click(function () {
      $(".user-chat").removeClass("user-chat-show")
    });
  });


  return (
    <DialogContext.Provider value={{
      currentDialog,
      setCurrentDialog
    }}>
      <div className="layout-wrapper d-lg-flex">

        <Menu/>
        <LeftSidebar/>

        <ChatSection/>

      </div>
    </DialogContext.Provider>


  );
}

export default App;
