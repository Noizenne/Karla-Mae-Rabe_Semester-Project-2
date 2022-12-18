import * as handlers from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  templates.limitedTemplate();
  handlers.searchListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/login/index.html") {
  handlers.setLoginFormListener();
} else if (path === "/Treasures/register/index.html") {
  handlers.setRegisterFormListener();
}else if (path === "/Treasures/listings/index.html") {
  templates.allListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/listings/listing/index.html") {
  templates.singleListingTemplate();
  templates.biddersTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/listings/listing/bid/index.html") {
  handlers.biddingFormListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/profile/index.html") {
  templates.profileTemplate();
  templates.profileListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/profile/create/index.html") {
  handlers.createListingListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/profile/edit.html") {
  handlers.editAvatar();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/user/index.html") {
  templates.userTemplate();
  templates.userListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
}
