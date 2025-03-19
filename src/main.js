import fetchPhotos from "./js/pixabay-api";
import createMarkup from "./js/render-functions";
import { gallery, loader } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", renderPhotos);

function renderPhotos(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    loader.classList.toggle("loader");
    const searchQuery = event.currentTarget.elements.search.value.toLowerCase().trim();
    fetchPhotos(searchQuery, createMarkup);
}