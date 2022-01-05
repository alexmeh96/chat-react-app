import React, {useContext} from 'react';
import logo from "../../static/picture/logo.svg";
import {currentUser} from "../../data";
import {AuthContext} from "../../context";

const Menu = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="side-menu flex-lg-column mr-lg-1">
      <div className="navbar-brand-box">
        <a href="" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src={logo} alt="" height="30"/>
                        </span>
        </a>

        <a href="" className="logo logo-light">
                        <span className="logo-sm">
                            <img src={logo} alt="" height="30"/>
                        </span>
        </a>
      </div>

      <div className="flex-lg-column my-auto">
        <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
          <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Profile">
            <a className="nav-link" id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab">
              <i className="ri-user-2-line"/>
            </a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Chats">
            <a className="nav-link active" id="pills-chat-tab" data-toggle="pill" href="#pills-chat" role="tab">
              <i className="ri-message-3-line"/>
            </a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Groups">
            <a className="nav-link" id="pills-groups-tab" data-toggle="pill" href="#pills-groups" role="tab">
              <i className="ri-group-line"/>
            </a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Contacts">
            <a className="nav-link" id="pills-contacts-tab" data-toggle="pill" href="#pills-contacts" role="tab">
              <i className="ri-contacts-line"/>
            </a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Settings">
            <a className="nav-link" id="pills-setting-tab" data-toggle="pill" href="#pills-setting" role="tab">
              <i className="ri-settings-2-line"/>
            </a>
          </li>
          <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
            <a className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">

              {
                currentUser.avatar
                  ?
                  <img src={currentUser.avatar} alt="" className="profile-user rounded-circle"/>
                  :
                  <div className="avatar-xs rounded-circle profile-user">
              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                {currentUser.name[0].toUpperCase()}
              </span>
                  </div>
              }
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Profile <i
                className="ri-profile-line float-right text-muted"/></a>
              <a className="dropdown-item" href="#">Setting <i
                className="ri-settings-3-line float-right text-muted"/></a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" href="#">Log out <i
                className="ri-logout-circle-r-line float-right text-muted"/></a>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-lg-column d-none d-lg-block">
        <ul className="nav side-menu-nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" id="light-dark" href="#" data-toggle="tooltip" data-trigger="hover"
               data-placement="right" title="Dark / Light Mode">
              <i className="ri-sun-line theme-mode-icon"/>
            </a>
          </li>

          <li className="nav-item btn-group dropup profile-user-dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              {
                currentUser.avatar
                  ?
                  <img src={currentUser.avatar} alt="" className="profile-user rounded-circle"/>
                  :
                  <div className="avatar-xs rounded-circle profile-user">
              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                {currentUser.name[0].toUpperCase()}
              </span>
                  </div>
              }
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Profile <i
                className="ri-profile-line float-right text-muted"/></a>
              <a className="dropdown-item" href="#">Setting <i
                className="ri-settings-3-line float-right text-muted"/></a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" href="#" onClick={logout}>Log out <i
                className="ri-logout-circle-r-line float-right text-muted"/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
