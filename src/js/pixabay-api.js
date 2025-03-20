import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { loader } from "./render-functions";

axios.defaults.baseURL = "https://pixabay.com/api/";

const searchParams = {
    key: "49370503-7e4a3b73ee503433174e66c4b",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 9,
    safesearch: true,
};

export default function fetchPhotos(searchQuery, createMarkup) {
    searchParams.q = searchQuery;
    axios.get(`?${new URLSearchParams(searchParams)}`)
        .then(response => {
            if (response.data.totalHits === 0) {
                loader.classList.toggle("loader");
                showNotification();
                return
            }
            createMarkup(response.data.hits) })
        .catch(() => {
            loader.classList.toggle("loader");
            loader.innerHTML = "Oops... something went wrong...";
        });
}

function showNotification() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
    });
}