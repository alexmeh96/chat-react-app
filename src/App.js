import React from "react";

// import "magnific-popup"  //  всплывающее окно

// import OwlCarousel from 'react-owl-carousel';

import Menu from "./components/menu/Menu";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import ChatSection from "./components/chatSection/ChatSection";

// const $ = jQuery;
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

function App() {

  $(document).ready(function () {
    // $(".popup-img").magnificPopup({
    //   type: "image",
    //   closeOnContentClick: !0,
    //   mainClass: "mfp-img-mobile",
    //   image: {verticalFit: !0}
    // });

    $("#user-profile-hide").click(function () {

      $(".user-profile-sidebar").hide()
    });

    $(".user-profile-show").click(function () {

      $(".user-profile-sidebar").show()
    });

    $(".chat-user-list li a").click(function () {
      $(".user-chat").addClass("user-chat-show")
    });

    // $(".user-chat-remove").click(function () {
    //   console.log("user-chat-remove")
    //   $(".user-chat").removeClass("user-chat-show")
    // });
  });


  return (

    <div className="layout-wrapper d-lg-flex">

      <Menu/>
      <LeftSidebar/>


      <ChatSection />

    </div>

  );
}

export default App;
