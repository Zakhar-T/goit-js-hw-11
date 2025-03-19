import fetchPhotos from "./js/pixabay-api";
import createMarkup from "./js/render-functions";
import { gallery } from "./js/render-functions";

const form = document.querySelector(".form");
const searchParams = {
    key: "49370503-7e4a3b73ee503433174e66c4b",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 9,
    safesearch: true,
};

form.addEventListener("submit", renderPhotos);

function renderPhotos(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    const searchText = event.currentTarget.elements.search.value.trim();
    searchParams.q = searchText;
    fetchPhotos(searchParams, createMarkup);
}