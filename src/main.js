import axios from "axios";
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

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

form.addEventListener("submit", renderPhotos);
gallery.addEventListener("click", showPhoto)

function renderPhotos(event) {
    event.preventDefault();
    gallery.innerHTML = "";

    const searchText = event.currentTarget.elements.search.value.trim();
    searchParams.q = searchText;
    fetchPhotos();
}

function fetchPhotos() {
    return axios.get(`?${new URLSearchParams(searchParams)}`)
        .then(response => {
            console.log(response);
            if (response.data.totalHits === 0) {
                showNotification();
                return
            }
            return createMarkup(response.data.hits) })
        .catch(error => console.log(error));
}

function createMarkup(images) {
    const markup = images.map(image => {
        const { webformatURL, tags, largeImageURL, likes, views, comments, downloads } = image;
        return `<li class="gallery-card">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags.split(",")[0]}" class="card-image" width="360" height="152" />
            <ul class="card-caption">
              <li class="image-tag"><p>Likes<br />${likes}</p></li>
              <li class="image-tag"><p>Views<br />${views}</p></li>
              <li class="image-tag"><p>Comments<br />${comments}</p></li>
              <li class="image-tag"><p>Downloads<br />${downloads}</p></li>
            </ul>
          </a>
        </li>`;
    }).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
}

function showNotification() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
    });
}

function showPhoto(event) {
    if (event.target.nodeName === "A") {
        event.preventDefault();
        new SimpleLightbox('.gallery li a', {
            captionsData: "alt",
            captionDelay: 250,
        });
    }
}