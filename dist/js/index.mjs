import * as handlers from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/index.html" || path === "/") {
  templates.limitedTemplate();
  handlers.searchListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/login/index.html" || path === "/code/login/") {
  handlers.setLoginFormListener();
} else if (path === "/code/register/index.html" || path === "/code/register/") {
  handlers.setRegisterFormListener();
}else if (path === "/code/listings/index.html" || path === "/code/listings/") {
  templates.allListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/listings/listing/index.html" || path === "/code/listings/listing/") {
  templates.singleListingTemplate();
  templates.biddersTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/listings/listing/bid/index.html" || path === "/code/listing/bid/") {
  handlers.biddingFormListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/profile/index.html" || path === "/code/profile/") {
  templates.profileTemplate();
  templates.profileListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/profile/create/index.html" || path === "/code/preofile/create/") {
  handlers.createListingListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/profile/edit.html") {
  handlers.editAvatar();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/code/user/index.html" || path === "/code/user/") {
  templates.userTemplate();
  templates.userListingsTemplate();
  templates.loggedInName();
  handlers.logoutListener();
}
