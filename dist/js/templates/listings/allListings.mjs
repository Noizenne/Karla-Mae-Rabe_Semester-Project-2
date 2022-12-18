import { getListings } from "../../api/listings/index.mjs";
import { newDate } from "../../tool/countdown.mjs";

export function templateListings(listingsData) {
  const endsAt = listingsData.endsAt;
  const endsAtDate = newDate(endsAt);

  const section = document.createElement("div");
  section.classList.add("listing");
  section.classList.add("m-2");
  section.innerHTML = `<a href="/Treasures/listings/listing/index.html?id=${listingsData.id}">
   <div class="d-flex justify-content-center text-align-center">${listingsData.title}</div>
    <div class="date d-flex justify-content-center align-items-center"><i class="fa-solid fa-hourglass-start"></i>${endsAtDate}</div></a>
  `;

  if (listingsData.media) {
    const img = document.createElement("img");
    img.src = listingsData.media;
    img.alt = `Image is from ${listingsData.title}`;
    section.append(img);
  }

  return section;
}

export function renderListings(listingsData, parent) {
  parent.append(...listingsData.map(templateListings));
}
export async function allListingsTemplate() {
  const listings = await getListings();
  const container = document.querySelector(".listings");
  renderListings(listings, container);
}
