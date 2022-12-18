import { getListing } from "../../api/listings/index.mjs";

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const id = searchParams.get("id");

const container = document.querySelector(".bidders");

export function biddersListing(listingData) {
  if (listingData.bids == 0) {
    document.querySelector(".noBids").innerHTML = "No bidders yet.";
    return;
  }
  listingData.bids.forEach((bidders) => {
    const section = document.createElement("div");
    section.classList.add("topBidders");
    section.classList.add("m-2");
    section.innerHTML = `<a href="/code/user/index.html?name=${bidders.bidderName}">
     <div class="bidder">
     <div style="font-size: 20px; font-weight: bold;">${bidders.amount} credits</div>
     <p>${bidders.bidderName}</p>
      </div>
      </a>`;

    container.appendChild(section);
  });
}

export function renderBiddings(listingData, parent) {
  parent.append(biddersListing(listingData));
}

export async function biddersTemplate() {
  const listings = await getListing(id);
  const container = document.querySelector(".bidders");
  renderBiddings(listings, container);
}
