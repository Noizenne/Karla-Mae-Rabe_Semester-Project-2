import { getListingsFromUser } from "../../api/listings/index.mjs";
import { newDate } from "../../tool/countdown.mjs";

const container = document.querySelector(".userListings");

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const name = searchParams.get("name");

export function templateUserListings(listingData) {
  
  if (listingData.length == 0) {
    document.querySelector(".noListing").innerHTML = `<p>No listings yet.</p>`;
    return;
  }
  listingData.forEach((listings) => {
    const endsAt = listings.endsAt;
    const endsAtDate = newDate(endsAt);

    const section = document.createElement("div");
    section.classList.add("listing");
    section.classList.add("m-2");

    section.innerHTML = `<a href="/code/listings/listing/index.html?id=${listings.id}">
    <div class="d-flex justify-content-center">${listings.title}</div>
     <div class="d-flex justify-content-center align-items-center date"><i class="fa-solid fa-hourglass-start"></i>${endsAtDate}</div></a>
     <div class="d-flex justify-content-center"><img src="${listings.media}"</img></div>
    `;

    container.appendChild(section);
  });
}

export function renderUserListings(listingData, parent) {
  parent.append(templateUserListings(listingData));
}

export async function userListingsTemplate() {
  const profile = await getListingsFromUser(name);

  const container = document.querySelector(".userListings");
  renderUserListings(profile, container);
}
