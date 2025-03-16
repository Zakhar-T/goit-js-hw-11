import axios from "axios";
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const notificationInstance = iziToast.error({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
});



axios.defaults.baseURL = "https://pixabay.com/api/";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const searchParams = {
    key: "49370503-7e4a3b73ee503433174e66c4b",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 9,
    safesearch: true,
};

form.addEventListener("submit", showPhotos);

function showPhotos(event) {
    event.preventDefault();
    gallery.innerHTML = "";

    const searchText = event.currentTarget.elements.search.value;
    searchParams.q = searchText;
    fetchPhotos()
}

function fetchPhotos() {
    return axios.get(`?${new URLSearchParams(searchParams)}`)
        .then(response => {
            if (response.status !== 200) {
                return notificationInstance;
            }
            return createMarkup(response.data.hits) })
        .catch(error => console.log(error));
}

function createMarkup(images) {
    const markup = images.map(image => {
        return `<li class="gallery-card">
          <img src="${image.webformatURL}" alt="${image.id}" class="card-image" width="360" height="152" />
          <ul class="card-caption">
            <li class="image-tag"><p>Likes<br />${image.likes}</p></li>
            <li class="image-tag"><p>Views<br />${image.views}</p></li>
            <li class="image-tag"><p>Comments<br />${image.comments}</p></li>
            <li class="image-tag"><p>Downloads<br />${image.downloads}</p></li>
          </ul>
        </li>`;
    }).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
}