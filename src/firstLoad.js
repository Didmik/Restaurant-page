const firstLoad = function() {

    const content = document.querySelector("#content")

    const header = document.createElement("h1");
    header.classList = "topTitle";
    header.textContent = "Restaurant Cool"
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = "../img/Restaurant-Pic.jpg";
    image.alt = "Pic of a Restaurant";
    image.classList = "resPic";
    content.appendChild(image);

    const info = document.createElement("p");
    info.classList = "info";
    info.textContent = "Our restaurant is a cool and chill restaurant. Bring your family" 
    "and eat great and cheap, but classy food";
    content.appendChild(info);

}

export default firstLoad;