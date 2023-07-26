const firstLoad = function() {

    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.classList.add("topTitle");
    header.textContent = "Restaurant Cool";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = "../img/Restaurant-Pic.jpg";
    image.alt = "Pic of a Restaurant";
    image.classList.add("resPic");
    content.appendChild(image);

    const info = document.createElement("p");
    info.classList.add("info");
    info.textContent = "Our restaurant is a cool and chill restaurant. Bring your family";
    content.appendChild(info);

}

export default firstLoad;