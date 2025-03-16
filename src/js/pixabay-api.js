import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
//axios.defaults.headers.common["x-api-key"] = "49370503-7e4a3b73ee503433174e66c4b";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const searchParams = new URLSearchParams({
    key: "49370503-7e4a3b73ee503433174e66c4b",
    q: "cats",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

function fetchPhotos() {
    axios.get("?key=49370503-7e4a3b73ee503433174e66c4b")
        .then(response => { console.log(response.data) })
        .catch(error => console.log(error));
}

axios.get("?key=49370503-7e4a3b73ee503433174e66c4b")
        .then(response => { console.log(response.data) })
        .catch(error => console.log(error));

fetchPhotos();

console.log("");
