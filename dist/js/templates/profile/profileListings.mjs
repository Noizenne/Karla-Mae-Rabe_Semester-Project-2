import { getListingsFromProfile } from "../../api/listings/index.mjs";
import { newDate } from "../../tool/countdown.mjs";

const container = document.querySelector(".profileListings");

export function templateProfileListings(listingData) {
  listingData.forEach((listings) => {
    const endsAt = listings.endsAt;
    const endsAtDate = newDate(endsAt);

    const section = document.createElement("div");
    section.classList.add("listing");
    section.innerHTML = `<a href="/Treasures/listings/listing/index.html?id=${listings.id}">
    <div class="d-flex justify-content-center">${listings.title}</div>
     <div class="d-flex justify-content-center align-items-center  date"><i class="fa-solid fa-hourglass-start"></i>${endsAtDate}</div></a>
     <div class="d-flex justify-content-center"><img src="${listings.media}"</img></div>
    `;

    if (!listings) {
      document.querySelector(
        ".noListing"
      ).innerHTML = `<p>No listings yet.</p>`;
      return;
    }

    container.appendChild(section);
  });
}

export function renderProfileListings(listingData, parent) {
  parent.append(templateProfileListings(listingData));
}

export async function profileListingsTemplate() {
  const profile = await getListingsFromProfile();

  const container = document.querySelector(".profileListings");
  renderProfileListings(profile, container);
}
