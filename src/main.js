import iziToast from "izitoast";
import fetchPhotos from "./js/pixabay-api";
import createMarkup from "./js/render-functions";
import { gallery, loader } from "./js/render-functions";

const form = document.querySelector(".form");
loader.classList.toggle("loader");

form.addEventListener("submit", renderPhotos);

function renderPhotos(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.search.value.toLowerCase().trim();
    if (!searchQuery) {
        iziToast.error({
            message: "Search field must not be empty!",
            position: "topRight",
        });
        return
    };
    gallery.innerHTML = "";
    loader.classList.toggle("loader");
    fetchPhotos(searchQuery, createMarkup);
}