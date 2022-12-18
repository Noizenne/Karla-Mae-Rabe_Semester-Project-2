import { getListings } from "../api/listings/read.mjs";
import { newDate } from "../tool/countdown.mjs";

export async function searchListener() {
  const searchInput = document.querySelector("#searchInput");
  const searchForm = document.querySelector("#search");
  const listingsContainer = document.querySelector(".searchResult");

  searchForm.addEventListener("keyup", async (event) => {
    event.preventDefault();

    const listings = await getListings();
    console.log(listings);

    const filteredListings = listings.filter((listing) => {
      const endsAt = listing.endsAt;
      const endsAtDate = newDate(endsAt);
      const title = listing.title.toLowerCase();

      const searchValue = searchInput.value.toLowerCase();
      console.log(searchValue);

      if (title.includes(searchValue)) {
        listingsContainer.innerHTML = `<div class="listing">
                    <a href="/Treasures/listings/listing/index.html?id=${listing.id}">
                    <div class="d-flex justify-content-center text-align-center">${listing.title}</div>
                     <div class="d-flex justify-content-center date"><i class="fa-solid fa-hourglass-start"></i>${endsAtDate}</div>
                     <div class="d-flex justify-content-center"><img style="solid 1px white" src="${listing.media}"</img></div></a>
                     <div>`;
        return true;
      }
    });

    if (filteredListings === 0) {
      listingsContainer.innerHTML = `<p>No matches</p>`;
    }

    getListings(filteredListings, listingsContainer);
  });
}
