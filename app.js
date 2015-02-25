"use strict";

var Auth0Lock = require('auth0-lock');

var auth0Lock = new Auth0Lock("<YOUR INFO HERE>", "<YOUR INFO HERE>");

document.addEventListener("DOMContentLoaded", function() {
  var login = document.getElementById("login");
  var logout = document.getElementById("logout");

  login.addEventListener("click", loginAuth0);
  logout.addEventListener("click", logoutAuth0);
});


function loginAuth0() {
  auth0Lock.show(function(err, profile, token) {
    if(err) {
      console.log("error: ", err);
    }

    console.log("profile: ", profile);
    console.log("token: ", token);
  })
}

function logoutAuth0() {
  auth0Lock.logout();
}