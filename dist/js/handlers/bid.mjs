import { postBid } from "../api/listings/post.mjs";

export function biddingFormListener() {
  const biddingForm = document.querySelector(".bid-form");
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  if (biddingForm) {
    biddingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const bid = event.target.amount.value;

      postBid(id, Number(bid));
      console.log(id, Number(bid));
    });
  }
}
