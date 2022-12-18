import { createListing } from "../api/listings/post.mjs";

export function createListingListener() {
  const form = document.querySelector("#createListing-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());
      postData.tags = postData.tags.split(", ").map((item) => item.trim());
      postData.media = postData.media.split(", ").map((item) => item.trim());

      if (!postData.media.length) {
        delete postData.media;
      }

      createListing(postData);
    });
  }
}
