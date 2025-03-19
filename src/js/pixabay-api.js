import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios.defaults.baseURL = "https://pixabay.com/api/";

export default function fetchPhotos(searchParams, createMarkup) {
    return axios.get(`?${new URLSearchParams(searchParams)}`)
        .then(response => {
            if (response.data.totalHits === 0) {
                showNotification();
                return
            }
            return createMarkup(response.data.hits) })
        .catch(error => console.log(error));
}

function showNotification() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
    });
}