import { getListing } from "../../api/listings/index.mjs";
import { newDate } from "../../tool/countdown.mjs";

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const id = searchParams.get("id");

export function templateListing(listingData) {
  const endsAt = listingData.endsAt;
  const endsAtDate = newDate(endsAt);
  const section = document.createElement("div");
  section.classList.add("single");
  section.innerHTML = `<div class="d-flex justify-content-center row">
      <div class="d-flex justify-content-center"><img style="solid 1px white" src="${listingData.media}"</img></div>
      <div class="d-flex justify-content-center">Seller: &nbsp; <a href="/code/user/index.html?name=${listingData.seller.name}">${listingData.seller.name}</a></div>
      
      </div>
      <div class="d-flex justify-content-center row" style="height: auto">
      <h1 class="title d-flex justify-content-center">${listingData.title}</h1>
      <div class="date d-flex justify-content-center align-items-center" style="width:auto;"><i class="fa-solid fa-hourglass-start"></i> ${endsAtDate}</div>
      <div class="d-flex justify-content-center" >Bids: ${listingData._count.bids}</div>
      <div class="d-flex justify-content-center" >Description:</div>
      <div class="desc date d-flex justify-content-center" style="width: auto;">${listingData.description}</div>
      <div class="d-flex justify-content-center">
      <button id="makeBid" class=" btn m-2" onclick="location.href='/code/listings/listing/bid/index.html?id=${listingData.id}'">Make a bid</button>
      </div>
      </div>`;

  return section;
}

export function renderListings(listingData, parent) {
  parent.append(templateListing(listingData));
}

export async function singleListingTemplate() {
  const listings = await getListing(id);
  const container = document.querySelector(".singleListing");
  renderListings(listings, container);
}
